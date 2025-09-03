import { Component } from '@angular/core';
import { Introduction } from "../../introduction/introduction";
import { Skill } from "../skill/skill";
import { About } from "../about/about";
import { Achievement } from "../achievement-section/achievement/achievement";
import { Project } from "../project/project";
import { Contact } from "../contact/contact";

@Component({
  selector: 'app-home',
  imports: [Introduction, Skill, About, Achievement, Project, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
