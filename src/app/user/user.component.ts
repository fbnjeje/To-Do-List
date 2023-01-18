import { NgFor } from "@angular/common";
import { WriteKeyExpr } from "@angular/compiler";
import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent {
  users: string[] = ["pene", "aaa"];

  delete(item: string) {
    this.users = this.users.filter(value => value !== item);
  }

  form = new FormGroup({
    task: new FormControl("", [Validators.required])
  });

  add() {
    let task: string | any = this.form.value.task;
    if (task) {
      this.users.push(task);
    }

    localStorage.setItem("taskList", JSON.stringify(this.users));
  }

  // ngOnInit() {
  //   const dataRemind: string | any = localStorage.getItem("taskList");
  //   const dataParse = JSON.parse(dataRemind);
  //   this.users = dataParse;
  // }
}
