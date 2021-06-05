import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  public get(key: string) {
    return this._storage.get(key);
  }

  //Função para adicionar lançamento
  public addLancamento(key: string, value: any) {
    this._storage?.set(key, value);
  }
  
  //Função que retorna todos os lançamentos em um array de objetos
  public retornaTodosLancamentos(){
    let lancamentos: any = [];
    this.storage.forEach((key, value, index) => {
      lancamentos.push({'key': value, 'value': key})
    })
    return lancamentos;
  }

}
