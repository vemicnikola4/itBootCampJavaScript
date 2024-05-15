
//preporuka da u klasi polja pocinju donjom crtom _
class Auto{
    constructor(marka, boja, imaKrov){
        this.marka= marka;
        this.boja = boja;
        this.imaKrov = imaKrov;
    }
    //geteri i seteri

    //seteri
    //seter nazovemo isto kao polje samo bez donje crte
    set marka(m){
        if ( m.lenght > 0 ){
            this._marka = m;

        }else{
            this._marka = "Skoda";
        }
    }
    set boja(b){
        if ( b.lenght > 0 ){
            this._boja = b;

        }else{
            this._boja = "Siva";
        }
    }
    set imaKrov(ima){
        if ( typeof ima == "boolean" ){
            if (ima === true ){
                this._imaKrov = true;

            }else{
                this._imaKrov = false;
            }

        }else{
            this._imaKrov = false;
        }
    }
    sviraj(){
        console.group(`bep`)
    }
    
}

export default Auto;