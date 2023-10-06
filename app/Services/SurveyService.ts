import Survey from "App/Models/Survey";
import { ICrudService } from "Contracts/interfaces/CrudServiceInterface";

export default class SurveyService implements ICrudService<Survey> {
    getAll: () => Promise<Survey[]>;
    getOne: (id: string) => Promise<Survey | null>;
    create: (data: Survey) => Promise<Survey>;
    update: (id: string, data: Survey) => Promise<Survey>;
    delete: (id: string) => Promise<Survey>;

}