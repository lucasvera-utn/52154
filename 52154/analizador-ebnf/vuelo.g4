grammar vuelo;

// Reglas del parser (sintaxis)
prog   : codigo_vuelo aeropuerto '-' aeropuerto hora ',' estado ',' 'Gate:' puerta ;

codigo_vuelo: LETRA LETRA DIGITO DIGITO DIGITO ;

aeropuerto  : LETRA LETRA LETRA ;

hora        : HORA | 'NOW' ;

estado      : 'ON_TIME' | 'DELAYED' | 'CANCELLED' ;

puerta      : LETRA DIGITO DIGITO ;

// Reglas del lexer (tokens)
HORA        : DIGITO DIGITO ':' DIGITO DIGITO ;

LETRA       : [A-Z] ;
DIGITO      : [0-9] ;

WS          : [ \t\r\n]+ -> skip ;