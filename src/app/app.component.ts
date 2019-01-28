import { Component } from '@angular/core';

import { Post } from "../model/Post";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exoBlog';
  post1: Post = new Post();
  post2: Post = new Post();
  post3: Post = new Post();

  listPost: Array<Post> = [];

  constructor() {
    this.post1.setTitle("MonPremierPost");
    this.post1.setcontent("Dans le domaine de l'informatique, la programmation, " +
      "appelée aussi codage, est l'ensemble des activités qui permettent l'écriture " +
      "des programmes informatiques. C'est une étape importante du développement " +
      "de logiciels.");

    this.post2.setTitle("MonDeuxièmePost");
    this.post2.setcontent("Pour écrire un programme, on utilise un langage de programmation. " +
      "Un logiciel est un ensemble de programmes dédié à la réalisation de certaines tâches " +
      "par un utilisateur du logiciel.");

    this.post3.setTitle("MonTroisièmePost");
    this.post3.setcontent("Il n'y a que deux sortes de langages de programmation: " +
      "ceux dont les gens disent toujours du mal et ceux que personne n'utilise.");

    this.listPost.push(this.post1);
    this.listPost.push(this.post2);
    this.listPost.push(this.post3);
  }
}
