import ListItem from "./ListItem";

interface List {
	list: ListItem[],
	load(): void,
	save(): void,
	clearList(): void,
	addItem(itemObj: ListItem): void,
	removeItem(id: string): void,
}

export default class FullList implements List {

	static instance: FullList = new FullList() //- static since we need to make this a SINGLETON. I think it means this is easy to over ride pre existing info

	private constructor( //- this private is required for the static
		private _list: ListItem[] = []
	) { }

	get list(): ListItem[] {
		return this._list
	}

	load(): void {
		const storedList: string | null = localStorage.getItem('myList')
		if (typeof storedList !== 'string') return
		const parsedList: { _id: string, _item: string, _checked: boolean }[] = JSON.parse(storedList)
		parsedList.forEach(itemObj => {
			const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj._checked)
			FullList.instance.addItem(newListItem)
		})
	}

	save(): void {
		localStorage.setItem('myList', JSON.stringify(this._list))
	}

	clearList(): void {
		this._list = []
		localStorage.setItem('myList', JSON.stringify([]))
	}

	doNothing(): string { //- can always add methods, but you must at least include those made in the interface
		return 'except return a string'
	}

	addItem(itemObj: ListItem): void {
		this._list.push(itemObj)
		this.save()
	}

	removeItem(id: string): void {
		this._list = this._list.filter(item => item.id !== id)
		this.save()
	}

	//TODO: set up method to handle re-order. perhaps in the ListTemplate since this is deals with DOM el and events

}