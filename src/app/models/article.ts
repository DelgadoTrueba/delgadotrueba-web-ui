import{Date} from './date'

export class Article {

    constructor(
        public title: String,
        public description: String,
        public link: String,
        public photo: String,
        public date: Date,
        public tags: String[]
    ){}

}
