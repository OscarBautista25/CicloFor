var edad, estadoCivil, estatura, sexo, contadorPersonas=0, porcentajeCondicion, acumuladorEdad=0, acumuladorEstatura=0, promedioEdad, promedioEstatura;
for(var idPersona=1;idPersona<=10; idPersona++){
    edad = parseInt(prompt("Ingrese la edad de la persona número "+idPersona));
    estadoCivil= parseInt(prompt("Ingrese el estado civil de la persona " +idPersona + ": 1.Soltero 2.Casado"))
    estatura = parseInt(prompt("Ingrese la altura de la persona " +idPersona));
    sexo = parseInt(prompt("Ingrese el sexo de la persona " +idPersona + "1. Hombre 2. Mujer"));
    if ((edad>=18)&&(estadoCivil==1)&&(estatura>170)&&(sexo==1)) {
        contadorPersonas=contadorPersonas+1;
        acumuladorEdad=acumuladorEdad+edad;
        acumuladorEstatura=acumuladorEstatura+estatura;

        
    }
}
porcentajeCondicion=(contadorPersonas/10)*100;
promedioEdad=acumuladorEdad/contadorPersonas;
promedioEstatura=acumuladorEstatura/contadorPersonas;

alert("La cantidad de personas con las condiciones dadas es " +porcentajeCondicion);
alert("El promedio de edades de las personas que cumplen con la condición es " +promedioEdad);
alert("El promedio de estaturas de las personas que cumplen con la condición es " +promedioEstatura);
