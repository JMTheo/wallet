import { Component, OnInit } from '@angular/core';
import {Storage } from '@ionic/storage'


@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
})
export class ConfiguracoesPage implements OnInit {

  constructor(private storage:Storage) {
    this.init()
    
   }

   OnInit(){
    

   }

   
  ngOnInit() {
    
    this.getTheValue()
   
   }


  private _storage:Storage | null = null;
    nome:  string;  
    sobrenome: string;
    email: string;
    dataDeNasc: Date;
    sexo: string;
    salario: number;




   
    async init() {
      const Storage = await this.storage.create();
      this._storage = this.storage;
    }

   async setTheValue(){
   await this._storage.set('nome', this.nome)
   await this._storage.set('nome', this.nome+"ola")
  
    await this._storage.set('sobrenome', this.sobrenome)
    await this._storage.set('email', this.sobrenome)
    await this._storage.set('dataDeNasc', this.dataDeNasc)
    await this._storage.set('sexo', this.sexo)
    await this._storage.set('salario', this.salario)



   }

 async  getTheValue(){
   var nome = await this._storage.get('nome')
        await this._storage.get('sobrenome')
        await this._storage.get('email')
        await this._storage.get('dataDeNasc')
       await this._storage.get('sexo')
       await this._storage.get('salario')
    
   }




}
