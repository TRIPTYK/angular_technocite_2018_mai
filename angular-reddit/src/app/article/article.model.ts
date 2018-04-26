export class Article {
    title: string;
    link: string;
    votes: number;

    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

    upVote() {
        if (this.votes < 20) {
            this.votes += 1;
        }  
    }

    downVote() {
        if (this.votes > 0) {
            this.votes -= 1;
        }
    }

    domain(): string {
        try {
            const path: string = this.link.split('//')[1];
            return path.split('/')[0];
        } catch(err) {
            return null;
        }
    }
}