import vueloLexer from "./generated/vueloLexer.js";
import vueloParser from "./generated/vueloParser.js";
import { CustomvueloListener } from "./CustomvueloListener.js";
import { CustomvueloVisitor } from "./CustomvueloVisitor.js";
import antlr4, { CharStreams, CommonTokenStream, ParseTreeWalker } from "antlr4";
import readline from 'readline';
import fs from 'fs';

async function main() {
    let input;

    // Intento leer la entrada desde el archivo input
    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        // Si no es posible leer el archivo, solicitar la entrada del usuario por teclado
        input = await leerCadena();
        console.log(input);
    }

    // Proceso la entrada con el analizador
    let inputStream = CharStreams.fromString(input);
    let lexer = new vueloLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new vueloParser(tokenStream);
    let tree = parser.prog();
    
    // Verifico si se produjeron errores
    if (parser.syntaxErrorsCount > 0) {
        console.error("\nSe encontraron errores de sintaxis en la entrada.");
    } 
    else {
        console.log("\nEntrada válida.");
        
        // 1. Mostrar árbol de análisis sintáctico
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log("\nÁrbol de análisis sintáctico:");
        console.log(cadena_tree);

        // 2. Generar tabla de lexemas-tokens usando el listener
        const listener = new CustomvueloListener();
        ParseTreeWalker.DEFAULT.walk(listener, tree);
        
        console.log("\nTabla de lexemas-tokens:");
        console.table(listener.getLexemeTable());

        // 3. Interpretar con el visitor
        const visitor = new CustomvueloVisitor();
        const flightInfo = visitor.visit(tree);
        
        console.log("\nInterpretación (traducción a JavaScript):");
        console.log(`// Información de vuelo`);
        console.log(`const flight = {`);
        console.log(`  code: "${flightInfo.code}",`);
        console.log(`  from: "${flightInfo.from}",`);
        console.log(`  to: "${flightInfo.to}",`);
        console.log(`  time: "${flightInfo.time}",`);
        console.log(`  status: "${flightInfo.status}",`);
        console.log(`  gate: "${flightInfo.gate}"`);
        console.log(`};`);
        console.log(`console.log("Vuelo:", flight);`);
    }
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese información de vuelo (ejemplo: AA123 JFK-LAX 12:30, ON_TIME, Gate:A12): ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

// Ejecuta la función principal
main();