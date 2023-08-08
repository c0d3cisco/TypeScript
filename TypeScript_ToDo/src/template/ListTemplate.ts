import FullList from "../model/FullList";

interface DOMList {
	ul: HTMLUListElement,
	clear(): void,
	render(fullList: FullList): void,
}

// TODO: make class, template default, implement the interface, make it a singleton, 

// export default class ListTemplate implements DOMList {

// 	static instance: ListTemplate = new ListTemplate()

// 	private constructor(){
// 		this.ul = document.getElementById('listItem') as HTMLUListElement
// 	}

// }