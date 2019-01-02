export class CalculatorModel{
	//state & behavior
	private _n1 : number = 0;
	private _n2 : number = 0;

	result : number = 0;

	set n1(value:string){
		this._n1 = parseInt(value, 10);
	}

	get n1() : string{
		return this._n1.toString();
	}

	set n2(value:string){
		this._n2 = parseInt(value, 10);
	}

	get n2() : string{
		return this._n2.toString();
	}


	add(){
		this.result = this._n1 + this._n2;
	}

	subtract(){
		this.result = this._n1 - this._n2;
	}

	multiply(){
		this.result = this._n1 * this._n2;
	}

	divide(){
		this.result = this._n1 / this._n2;
	}
}