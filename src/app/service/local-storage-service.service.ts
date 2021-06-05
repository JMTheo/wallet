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
  public addLancamento(value: any) {
    return this.retornaTodosLancamentos().then(result => {
      if(result) {
        result.push(value);
        return this._storage.set('lancamentos', result);
      } else {
        return this._storage.set('lancamentos', [value]);
      }
    });
  }

  //Para excluir um lançamento, apenas passe o ID
  public delLancamento(id: any) {
    return this.retornaTodosLancamentos().then(result => {
      if (result) {
        var index = result.indexOf(id);
        result.splice(index, 1);
        return this.storage.set('lancamentos', result);
      }
    });
  }
  //Função que retorna todos os lançamentos em um array de objetos
  public retornaTodosLancamentos(){
    return this._storage.get('lancamentos');
  }

  //Deletar a key inteira do localStorage
  public removerChave(key: string) {
    this._storage?.remove(key);
  }

}
