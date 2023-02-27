class Ejercicios{
     //1) Sumar dos numeros siempre cuando el primero sea mayor al segundo
    suma(){
      console.log("1)Sumar dos numeros siempre cuando el primero sea mayor al segundo")
    let num1= 5
    let num2= 3
    let suma= 0
     if (num1>num2){
        suma=num1+num2
        console.log(num1,"+",num2,"=",suma)
     }
    }
}
class operaciones{
   //2) Realizar una operacion segun el operador(+,-,*,/,%) realizar la suma, resta, multiplicacion, division y reciduo
operacion(){
   console.log("2)Realizar una operacion segun el operador(+,-,*,/,%) realizar la suma, resta, multiplicacion, division y reciduo")
   let num1=10
   let num2=2
   let sum=0,rest=0,mul=0,div=0,resi=0
   sum=num1+num2
   rest=num1-num2
   mul=num1*num2
   div=num1/num2
   resi=num1%num2
   console.log(num1,"+",num2,"=",sum)
   console.log(num1,"-",num2,"=",rest)
   console.log(num1,"*",num2,"=",mul)
   console.log(num1,"/",num2,"=",div)
   console.log(num1,"%",num2,"=",resi)  
}
}
class mayores{
   //3Presentar el mayor de dos numeros
mayor(){
   console.log("3)Presentar el mayor de dos numeros")
   let num1=7
   let num2=9
   if (num1>num2){
      console.log(num1,"es mayor que",num2)
   }
   else{
      console.log(num2,"es mayor que",num1)
   }
}
}
class presentar{
//4Dado un nombre presentarlo
nombre(){
   console.log("4)Dado un nombre presentarlo")
   let nom1="christian"
   console.log( nom1 )
}
}
class precioiva{
   //5) Dado un valor de compra presentar el total considerando un 12% de iva
   iva(){
      console.log("5)Dado un valor de compra presentar el total considerando un 12% de iva")
      let precio=300
      let total=0
      let iva=0
      iva=precio*.12
      total=precio+iva
console.log("total de compra es",total)
   }
}
class nombresrepetidos{
//6) Presentar 5 veces un nombre
nombrepresentar(){
   console.log("6)Presentar 5 veces un nombre")
   let nom="maria"
   let c=1
   for(c=1;c<=5;c++){
      console.log(c,nom)
   }
}
}
//7) Presentar los numeros multiplos de 3 del 3 al 21
class mul3a21{
   multiple1(){
      console.log("7)Presentar los numeros multiplos de 3 del 21 al 3")
      let n=3
      while (n<=21){
       if (n%3==0){
        console.log(n)
     }
    n=n+1
      }  
   }
}
//8) Presentar los numeros multiplos de 3 del 21 al 3
class mul21a3{
   multiple2(){
      console.log("8)Presentar los numeros multiplos de 3 del 21 al 3")
      let n=21
      while (n>=3){
       if (n%3==0){
        console.log(n)
     }
    n=n-1
      }  
   }
}
class nombresiguales{
   //9) Dados dos nombres indicar si son iguales o diferentes
   nombreigual(){
      console.log("9)Dados dos nombres indicar si son iguales o diferentes")
      let nom1="ana"
      let nom2="ana"
      if (nom1=nom2){
         console.log(nom1,nom2,"los nombres son iguales")  
      }
      else{
         console.log(nom1,nom2,"los nombres son diferentes")
      }
   }
}
class presentearreglom5{
  // 10) Dado diez numeros en un arreglo presentar los que tengan menos de 5 caracteres

   menosde5(){
       console.log("10)Presenta Elementos De Un Arreglo Que Tengan Menos De 5 Caracteres")
       let arreglo=["435656","345434","12","123456","12","2","12","1","9","434355"]
       console.log("el arreglo es:",arreglo)
       for(let pos=0;pos<10;pos=pos+1){
           if (arreglo[pos].length < 5  ){ 
            console.log(`pos->${pos} Elemento:${arreglo[pos]}` )
           }
         }
   }
}
class presentararreglo{
   //11) Dado un arreglo presentar sus elementos
   arreglopresente(){
      console.log("11)Dado un arreglo presentar sus elementos")
      let arreglo=[5,4,3,2,1]
      console.log(arreglo)
   }
}
////12) Dado un arreglo de numeros presentar los menores a 10
class menoresde10{
   presentarm10(){
       console.log("12)Dado un arreglo de numeros presentar los menores a 10")
       let num=[5,4,40,8,36]
       let long= num.length,c=0
       console.log("el arreglo es:",num)
       while (c < long){
           if (num[c]<10){
               console.log(num[c],"es menor que 10")
           }
          c=c+1 
       }
   }
}
//13) Dado un arreglo de numeros presentar los impares y al final la suma de los pares
class arregloimsumap{
   sumapares(){
       console.log("13)Dado un arreglo de numeros presentar los impares y al final la suma de los pares")
       let num=[5,4,40,8,36]
       let lon=num.length,c=0,suma=0
       console.log("el arreglo es:",num)
       while(c<lon){
           if (num[c] % 2 == 0){
               suma=suma+num[c]
               console.log("la suma de los pares es:",suma)
           }else{
          console.log(num[c],"es numero impar")
           }
           c=c+1
       }
   }
}
//14) Presentar el primero el medio y el ultimo valor de un arreglo
class presentarpmu{
   valorarreglo(){
       console.log("14)Presentar el primero el medio y el ultimo valor de un arreglo")
       let num=[5,4,40,8,36]
       let central = num[(num.length-1) /2]
       let ultimo =num[num.length-1]
       console.log("el arreglo es:",num)
   console.log("el primer numero del arreglo es:",num[0])
   console.log("el numero medio del arreglo es:",central)
   console.log("el ultimo numero del arreglo es:",ultimo)
   }
}
//15) Calcular el vuelto de un a compra dado el costo y el pago
class compra{
   vuelto(){
       console.log("15) Calcular el vuelto de un a compra dado el costo y el pago")
       let costo=25
       let pago = 30
       let vuelto=30-25
       console.log("el costo es:",costo)
       console.log("el pago es de:",pago)
       console.log("el vuelto es:",vuelto)
}
}
//16) Presentar la tabla de multiplicar de cualquier numero del 1 al 12
class tablasmulti{
   tablas(){
console.log("16)Presentar la tabla de multiplicar de cualquier numero del 1 al 12")
console.log("la tabla del 5")
let n=6
let n1=1,mul=1
while(n1<=12){
    mul=n*n1
    console.log(n,"*",n1,"=",mul)
    n1=n1+1
}
}
}
//17) Realizar la multiplicacion de dos numeros por medio de sumas sucesivas
class multinsuma{
   sumasucesiva(){
console.log("17) Realizar la multiplicacion de dos numeros por medio de sumas sucesivas")
let n1=5,n2=3
let suma=0
for(let i=0;i<n2;i=i+1){
    suma=n1+suma
    console.log(suma-n1,"+",n1,"=",suma)  
   }
console.log("la multipliación de ",n1," * ",n2," es = ",suma)
}
}
//18)Realizar la division de dos numeros por medio de restas sucesivas
class divisionresta{
   restasucesiva(){
console.log("18)Realizar la division de dos numeros por medio de restas sucesivas")
let n1=10,n2=2
let c=0
 let res=n1
 while (res-n2>=0){
    res=res-n2
    console.log(res+n2,"-",n2,"=",res)
    c=c+1
 }
console.log("la division entre:",n1,"/",n2,"=",c)
}
}
//19)Calcular el factorial de un numero
class factorialn{
   factorial(){
console.log("19)Calcular el factorial de un numero")
let n=5
let c=1,fac=1
while(c<=n){
    fac=fac*c
    c=c+1
}
console.log("el factorial del numero 5 es:",fac)
}
}
//20)Calcular el exponente de un numero
class exponentenumero{
   calcularexpo(){
      console.log("20)Calcular el exponente de un numero")
      let n=2,ex=3,po=1,c=0
     let elevado= Math.pow(n, ex);
      console.log("2"," ^",ex,"=",elevado)
  }
}
//21)Calcular la serie de fibonacci dado un numero
class seriefibonacci{
   calcularfibonacci(){
console.log("21)Calcular la serie de fibonacci dado un numero")
let a=0,b=1,c=1,cont=3,n=8
while (cont < n){
    a=b;b=c;c = a+b
    console.log(c)
    cont=cont +1
       }
    }
}
//22) Dado un numero invertirlo
class numeroinvertido{
   ivertirnum(){
console.log("22)Dado un numero invertirlo")
let num=321
let ninvertido=0,d=0
console.log(num)
while (num != 0){
    d=num%10
    ninvertido=ninvertido*10+d
    num=Math.trunc(num/10)
 
  }
  console.log(ninvertido)
 }
}
//23) Presentar los divisores de un numero
class divisoresnumero{
   divisores(){
      console.log("23) Presentar los divisores de un numero")
      let num=8
      let i=1
      for(i=1;i<=num;i++){
         if(num% i==0){
            console.log("los divisores son",i)
         }
      }
   }
}
//24) Presentar si un numero es perfecto o no (Perfecto:cuando la suma de los divisores incluidos el 1 y excluido el propio numero dada igual al numero)
class numeroperfecto{
   perfecton(){
console.log("24) Presentar si un numero es perfecto o no (Perfecto:cuando la suma de los")
let divisores=0,num=6,i=0,sumaperf=0
for(i=1;i<num;i=i+1){
    if(num % i == 0){
        console.log(i)
        sumaperf=sumaperf+i
    }
}
console.log("")
if(sumaperf==num){
    console.log(num,"Es un numero perfecto")
}else{
    console.log(num,"Es un numero no perfecto")
}
}
}
//25) Verfificar si un numero es primo o no(Primo cuando solo es divsivible para 1 y el propio numero, es decir no tenga divisores)
class numeroprimos{
   nprimo(){
      console.log("25) Verfificar si un numero es primo o no(Primo cuando solo es divsivible para 1 y el propio numero, es decir no tenga divisores")
      let num=7
      let cont=0,i=1
for(i=1;i<=num;i++)
{
   if(num % i==0)
   {
      cont=cont+1
   }
}
if(cont==2)
{
   console.log(num," es primo")
}
else
{
   console.log(num," no es primo")
}
}
}
let ejercicios1= new Ejercicios()
ejercicios1.suma()
let ejercicios2=new operaciones()
ejercicios2.operacion()
let ejercicios3= new mayores
ejercicios3.mayor()
let Ejercicios4=new presentar()
Ejercicios4.nombre()
let ejercicios5= new precioiva()
 ejercicios5.iva()
 let ejercicios6=new nombresrepetidos()
 ejercicios6.nombrepresentar()
 let ejercicios7=new mul3a21
 ejercicios7.multiple1()
 let ejercicios8= new mul21a3()
 ejercicios8.multiple2()
 let Ejercicios9=new nombresiguales()
 Ejercicios9.nombreigual()
 let ejercicios10=new presentearreglom5()
 ejercicios10.menosde5()
 let ejercicios11=new presentararreglo()
 ejercicios11.arreglopresente()
 let ejercicios12 = new menoresde10()
ejercicios12.presentarm10()
 let ejercicios13 = new arregloimsumap()
 ejercicios13.sumapares()
 let ejercicios14 = new presentarpmu()
ejercicios14.valorarreglo()
let ejercicios15 = new compra()
ejercicios15.vuelto()
let ejercicios16= new tablasmulti()
ejercicios16.tablas()
let ejercicios17= new multinsuma()
ejercicios17.sumasucesiva()
let ejercicios18= new divisionresta()
ejercicios18.restasucesiva()
let ejercicios19= new factorialn()
ejercicios19.factorial()
let ejercicios20=new exponentenumero()
ejercicios20.calcularexpo()
let ejercicios21= new seriefibonacci()
ejercicios21.calcularfibonacci()
let ejercicios22=new numeroinvertido()
ejercicios22.ivertirnum()
let ejercicios23=new divisoresnumero()
ejercicios23.divisores()
let ejercicios24=new numeroperfecto()
ejercicios24.perfecton()
let ejercicios25= new numeroprimos()
ejercicios25.nprimo()