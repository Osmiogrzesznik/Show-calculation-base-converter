

function Expr(v=""){
t={};
t.v=v+"";


t.brkt=
function brkt(l,b,sep=" = "){
    b+=""
    t.v+=//l + " " + sep;
    "("+l+" )"+b.sub()+" "+sep
    return t
}



t.l = 
    function l(x){t.v+="<br>"
    return t
}

t.eq =
    function eq(x){
    t.v+="="
    return t
}

return t
}

function powNote(l,b,p){
    p+=""
    b+=""
    unit=" "+l+"*"+b+p.sup()
        +" "//+" )"+"10".sub()+" ";
    return unit
}


function strAddReducer(str,unit,i){
    sep = (i==0 || unit=="") ?
    "":" + ";
    //console.log(sep)
    return str += sep + unit;
}

function doWorkings_valArr(valArr,base){
str_powers="";

multipObArr=valArr.map(function(dgt,i,ar){
        d=parseInt(dgt,base);
        calcdPow=Math.pow(base,ar.length-1-i);
        product=d*calcdPow;
        
        sep = i==0? "":" + ";

        str_powers += sep + powNote(d,base,ar.length-1-i);
        
        multipOb={
            calcdDigit:d,
            product:product,
            calcdPow:calcdPow
        }
        
        return multipOb
    })

prodArr=
multipObArr.map(function(multipOb){
        return multipOb.product != 0 ? 
            multipOb.product:
            "";
    })
str_multips=
multipObArr
    .map(function(multipOb){
        return multipOb.calcdDigit != 0 ? 
            multipOb.calcdDigit+"*"+multipOb.calcdPow:
            "";
    })
    .reduce(strAddReducer,"")


str_adding=
    prodArr.reduce(strAddReducer,"")

outp={
    isAddition: prodArr.length==1 ? false:true,
    str_powers:str_powers,
    str_multips:str_multips,
    str_addition:str_adding
}
return outp
}



function go(){


ib=parseInt(inpbase.value,10);
ivDecNum=parseInt(inpval.value,ib);
ob=parseInt(outbase.value,10);
iv=inpval.value;

jsonl([ib,ivDecNum,ob])

  iDigArr=iv.split("");
    work_ivToDec = doWorkings_valArr(iDigArr,ib);



t=new Expr("");
t.brkt(iv,ib)

if (ib!=10){
    t.brkt(work_ivToDec.str_powers,10)
    .brkt(work_ivToDec.str_multips,10)
    
    if (work_ivToDec.isAddition){
        t.brkt(work_ivToDec.str_addition,10)
    }
    //console.log(iDigArr)

//jsonl(work_ivToDec);
}
t.brkt(ivDecNum,10,"")


if (ob !=10){
t.v+=" = ";
ov=ivDecNum.toString(ob);
ovDigArr=ov.split("");
work_decToOv = doWorkings_valArr(ovDigArr,ob);
t.brkt(work_decToOv.str_powers,10)
.brkt(ov,ob,"");

}

out.innerHTML=
 "<br><br>"+
 t.v + "<BR>" +"<table>"+
divAndRem([],ivDecNum,ob).reduce(remDivNote,"") + "</table>"
}

function remDivNote(str,el,i,ar){
    unit = "<br><tr><td>" 
        +el.dec+"</td><td>  "+el.by + "</td><td> "+el.rem+"</td></tr>";
    return str + unit;
}

function divAndRem(acc,dec,base,rem){
nextdec= ~~(dec/base);
    if (nextdec==dec){
        return acc;
    } 
    else {
        acc.push({dec:dec,by:base,ndec:nextdec,rem:dec%base})
        return divAndRem(acc,nextdec,base,dec%base)
    }
}

function jsonl(x){
 return console.log(JSON.stringify(x))
}

