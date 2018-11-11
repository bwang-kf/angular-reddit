export class Article {
    protected title: string;
    protected link: string;
    protected votes: number;

    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

    voteUp() {
        this.votes++;
    }

    votesDown() {
        this.votes--;
    }

    getVotes() {
        return this.votes;
    }

    getTitle() {
        return this.title;
    }

    getLink() {
        return this.link;
    }
    
    // domain() is a utility function that extracts the domain from a URL
    domain(): string {
        try {
            // e.g. http://foo.com/path/to/bar
            const domainAndPath: string = this.link.split('//')[1];
            // e.g. foo.com/path/to/bar
            return domainAndPath.split('/')[0];
        } catch (err) {
            return null;
        }
    }
  
}