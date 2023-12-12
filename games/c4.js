// Class za igro 

class C4 {
    // Konstruktor, da lahko dostopamo do polja

    constructor(field) {
        this.field = field;
    }

    // Getter za polje

    getField() {
        return this.field;
    }

    // Getter za zmagovalca

    getWinner() {
        // Dobimo trenutno polje

        const field = this.field;

        // Preverimo, če je kdo zmagal (boring koda, samo gledamo, če je kjerkoli 4 v vrsto)

        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 4; j++) {
                if (!field[i][j].includes(":white_circle:") && field[i][j] === field[i][j + 1] && field[i][j] === field[i][j + 2] && field[i][j] === field[i][j + 3]) {
                    return field[i][j];
                }
            }
        }

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 7; j++) {
                if (!field[i][j].includes(":white_circle:") && field[i][j] === field[i + 1][j] && field[i][j] === field[i + 2][j] && field[i][j] === field[i + 3][j]) {
                    return field[i][j];
                }
            }
        }

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 4; j++) {
                if (!field[i][j].includes(":white_circle:") && field[i][j] === field[i + 1][j + 1] && field[i][j] === field[i + 2][j + 2] && field[i][j] === field[i + 3][j + 3]) {
                    return field[i][j];
                }
            }
        }

        for (let i = 0; i < 3; i++) {
            for (let j = 3; j < 7; j++) {
                if (!field[i][j].includes(":white_circle:") && field[i][j] === field[i + 1][j - 1] && field[i][j] === field[i + 2][j - 2] && field[i][j] === field[i + 3][j - 3]) {
                    return field[i][j];
                }
            }
        }

        return false;
    }

    // Getter za message polja

    getFieldMessage() {
        // Dobimo trenutno polje

        const field = this.field;

        // Formatiramo polje v lepši izgled

        const formattedField = field.map((row) => row.join(" ")).join("\n");

        // Vrnemo formatirano polje, array je še legacy, ker sem vmes spremenil sistem

        return [formattedField]
    }

    // Metoda za postavitev čipa

    placeChip(col, emote) {
        // Dobimo trenutno polje

        const field = this.field;

        // Preverimo, če je stolpec poln in dodamo čip, če ni

        const column = col - 1;

        for (let i = 5; i >= 0; i--) {
            if (field[i][column] === ":white_circle: ") {
                field[i][column] = emote + " ";
                break;
            }
        }

        if (field[0][6].split(" ")[2] == "") {
            field[0][6] = field[0][6].slice(0, -1);
        }

        // Nastavimo novo polje

        this.field = field;

        // Vrnemo novo polje

        return this.field.map((row) => row.join(" ")).join("\n");
    }
}

module.exports = C4;