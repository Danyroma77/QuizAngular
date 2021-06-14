

    export interface ObjSol {
        idsol: string;
        textsolution: string;
        isCorrect: number;
        idquestion: string;
    }

    export interface QuestionAndSolution {
        codingValue: string;
        idQuestion: string;
        questionText: string;
        objSol: ObjSol[];
    }

