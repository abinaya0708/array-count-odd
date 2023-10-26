//for github
document.write("count the odd numbers<br>");
document.write("---------------------<br>");
document.write("var a=[2,3,4,5,6,7,11,8]<br>");
document.write("--------------<br>");
document.write("output:<br>");
document.write("Count of odd numbers:4");




var a=[2,3,4,5,6,7,11,8];
var b=0;
for(let i=0;i<a.length;i++){
	if(a[i]%2!==0){
		b++;
		
	}
	
}
console.log(b);
