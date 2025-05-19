// Generated from c:/Users/veral/OneDrive/Escritorio/Nueva carpeta/vuelo.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import vueloListener from './vueloListener.js';
import vueloVisitor from './vueloVisitor.js';

const serializedATN = [4,1,11,42,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,
1,1,1,2,1,2,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,5,1,5,1,5,0,0,6,0,2,4,6,8,
10,0,2,2,0,4,4,8,8,1,0,5,7,35,0,12,1,0,0,0,2,23,1,0,0,0,4,29,1,0,0,0,6,33,
1,0,0,0,8,35,1,0,0,0,10,37,1,0,0,0,12,13,3,2,1,0,13,14,3,4,2,0,14,15,5,1,
0,0,15,16,3,4,2,0,16,17,3,6,3,0,17,18,5,2,0,0,18,19,3,8,4,0,19,20,5,2,0,
0,20,21,5,3,0,0,21,22,3,10,5,0,22,1,1,0,0,0,23,24,5,9,0,0,24,25,5,9,0,0,
25,26,5,10,0,0,26,27,5,10,0,0,27,28,5,10,0,0,28,3,1,0,0,0,29,30,5,9,0,0,
30,31,5,9,0,0,31,32,5,9,0,0,32,5,1,0,0,0,33,34,7,0,0,0,34,7,1,0,0,0,35,36,
7,1,0,0,36,9,1,0,0,0,37,38,5,9,0,0,38,39,5,10,0,0,39,40,5,10,0,0,40,11,1,
0,0,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class vueloParser extends antlr4.Parser {

    static grammarFileName = "vuelo.g4";
    static literalNames = [ null, "'-'", "','", "'Gate:'", "'NOW'", "'ON_TIME'", 
                            "'DELAYED'", "'CANCELLED'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             "HORA", "LETRA", "DIGITO", "WS" ];
    static ruleNames = [ "prog", "codigo_vuelo", "aeropuerto", "hora", "estado", 
                         "puerta" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = vueloParser.ruleNames;
        this.literalNames = vueloParser.literalNames;
        this.symbolicNames = vueloParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, vueloParser.RULE_prog);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 12;
	        this.codigo_vuelo();
	        this.state = 13;
	        this.aeropuerto();
	        this.state = 14;
	        this.match(vueloParser.T__0);
	        this.state = 15;
	        this.aeropuerto();
	        this.state = 16;
	        this.hora();
	        this.state = 17;
	        this.match(vueloParser.T__1);
	        this.state = 18;
	        this.estado();
	        this.state = 19;
	        this.match(vueloParser.T__1);
	        this.state = 20;
	        this.match(vueloParser.T__2);
	        this.state = 21;
	        this.puerta();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	codigo_vuelo() {
	    let localctx = new Codigo_vueloContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, vueloParser.RULE_codigo_vuelo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this.match(vueloParser.LETRA);
	        this.state = 24;
	        this.match(vueloParser.LETRA);
	        this.state = 25;
	        this.match(vueloParser.DIGITO);
	        this.state = 26;
	        this.match(vueloParser.DIGITO);
	        this.state = 27;
	        this.match(vueloParser.DIGITO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	aeropuerto() {
	    let localctx = new AeropuertoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, vueloParser.RULE_aeropuerto);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.match(vueloParser.LETRA);
	        this.state = 30;
	        this.match(vueloParser.LETRA);
	        this.state = 31;
	        this.match(vueloParser.LETRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	hora() {
	    let localctx = new HoraContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, vueloParser.RULE_hora);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        _la = this._input.LA(1);
	        if(!(_la===4 || _la===8)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	estado() {
	    let localctx = new EstadoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, vueloParser.RULE_estado);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 224) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	puerta() {
	    let localctx = new PuertaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, vueloParser.RULE_puerta);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.match(vueloParser.LETRA);
	        this.state = 38;
	        this.match(vueloParser.DIGITO);
	        this.state = 39;
	        this.match(vueloParser.DIGITO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

vueloParser.EOF = antlr4.Token.EOF;
vueloParser.T__0 = 1;
vueloParser.T__1 = 2;
vueloParser.T__2 = 3;
vueloParser.T__3 = 4;
vueloParser.T__4 = 5;
vueloParser.T__5 = 6;
vueloParser.T__6 = 7;
vueloParser.HORA = 8;
vueloParser.LETRA = 9;
vueloParser.DIGITO = 10;
vueloParser.WS = 11;

vueloParser.RULE_prog = 0;
vueloParser.RULE_codigo_vuelo = 1;
vueloParser.RULE_aeropuerto = 2;
vueloParser.RULE_hora = 3;
vueloParser.RULE_estado = 4;
vueloParser.RULE_puerta = 5;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vueloParser.RULE_prog;
    }

	codigo_vuelo() {
	    return this.getTypedRuleContext(Codigo_vueloContext,0);
	};

	aeropuerto = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AeropuertoContext);
	    } else {
	        return this.getTypedRuleContext(AeropuertoContext,i);
	    }
	};

	hora() {
	    return this.getTypedRuleContext(HoraContext,0);
	};

	estado() {
	    return this.getTypedRuleContext(EstadoContext,0);
	};

	puerta() {
	    return this.getTypedRuleContext(PuertaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof vueloVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Codigo_vueloContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vueloParser.RULE_codigo_vuelo;
    }

	LETRA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(vueloParser.LETRA);
	    } else {
	        return this.getToken(vueloParser.LETRA, i);
	    }
	};


	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(vueloParser.DIGITO);
	    } else {
	        return this.getToken(vueloParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.enterCodigo_vuelo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.exitCodigo_vuelo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof vueloVisitor ) {
	        return visitor.visitCodigo_vuelo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AeropuertoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vueloParser.RULE_aeropuerto;
    }

	LETRA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(vueloParser.LETRA);
	    } else {
	        return this.getToken(vueloParser.LETRA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.enterAeropuerto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.exitAeropuerto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof vueloVisitor ) {
	        return visitor.visitAeropuerto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class HoraContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vueloParser.RULE_hora;
    }

	HORA() {
	    return this.getToken(vueloParser.HORA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.enterHora(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.exitHora(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof vueloVisitor ) {
	        return visitor.visitHora(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EstadoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vueloParser.RULE_estado;
    }


	enterRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.enterEstado(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.exitEstado(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof vueloVisitor ) {
	        return visitor.visitEstado(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PuertaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vueloParser.RULE_puerta;
    }

	LETRA() {
	    return this.getToken(vueloParser.LETRA, 0);
	};

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(vueloParser.DIGITO);
	    } else {
	        return this.getToken(vueloParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.enterPuerta(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.exitPuerta(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof vueloVisitor ) {
	        return visitor.visitPuerta(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




vueloParser.ProgContext = ProgContext; 
vueloParser.Codigo_vueloContext = Codigo_vueloContext; 
vueloParser.AeropuertoContext = AeropuertoContext; 
vueloParser.HoraContext = HoraContext; 
vueloParser.EstadoContext = EstadoContext; 
vueloParser.PuertaContext = PuertaContext; 
