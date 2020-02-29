'use strict';

class TableTemplate{
    static fillIn(id,dict,columnName){
        var table=document.getElementById(id);
        table.style.visibility="visible";
        let Rows=table.getElementsByTagName('tr');
        let i=0,k;
        if(typeof columnName==='string')
        {
            if(columnName==='Length'){
                k=0;
            }
            if(columnName==='Part Number') {
                k=1;
            }
        }
        else {
            k=-1;
        }
        for(let Row of Rows)
        {
            let Columns=Row.getElementsByTagName('td');
            let j=0;
            for(let Column of Columns)
            {
                if(i!==0 && j===k)
                {
                    j++;
                    continue;
                }
                console.log(i,j);
                let text=Column.innerHTML.slice(2,-2);
                Column.innerHTML=dict[text];
                j++;
            }
            i++;
        }
    }
}
  
  