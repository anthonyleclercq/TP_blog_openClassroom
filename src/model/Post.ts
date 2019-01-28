 export class Post {

  private title: string ;
  private content: string;
  private loveIts: number;
  private created_at: string;

  constructor() {
    this.title = "";
    this.content = "";
    this.created_at = Date();
    this.loveIts = 0;
  }

  updateDate() {
    this.created_at = Date();
  }

  getTitle() {
    return this.title;
  }
  setTitle(p_title: string) {
    this.title = p_title;
  }

  getContent() {
    return this.content;
  }
  setcontent(p_content: string) {
    this.content = p_content;
  }

  getLoveIts() {
    return this.loveIts;
  }
  setLoveIts(p_loveIts: number) {
    this.loveIts = p_loveIts;
  }

  getCreated_at() {
    return this.created_at;
  }
}
