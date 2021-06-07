import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Lancamento } from '../interface/lancamento';

@Injectable({
  providedIn: 'root',
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
    return this.retornaTodosLancamentos().then((result) => {
      if (result) {
        result.push(value);
        //Deixando os lancamentos em ordem crescente
        result.sort(
          (a: Lancamento, b: Lancamento) =>
            new Date(a.diaCompra).getTime() - new Date(b.diaCompra).getTime()
        );
        return this._storage.set('lancamentos', result);
      } else {
        return this._storage.set('lancamentos', [value]);
      }
    });
  }

  //Para excluir um lançamento, apenas passe o ID
  public delLancamento(id: any) {
    return this.retornaTodosLancamentos().then((result) => {
      if (result) {
        var index = result.indexOf(id);
        console.log(index);
        result.splice(index, 1);
        return this.storage.set('lancamentos', result);
      }
    });
  }

  //Função para atualizar os valores de um lançamento
  public atualizarLancamento(id: any, newValue: any) {
    return this.retornaTodosLancamentos().then((result) => {
        result.forEach((e) => {
          if(e.id === id){
            console.log(e);
            result.splice(result.indexOf(e), 1, newValue);
            return this.storage.set('lancamentos', result);  
          }
        })
      return this.storage.set('lancamentos', result);  
    })
  }

  //Função que retorna todos os lançamentos em um array de objetos
  public retornaTodosLancamentos() {
    return this._storage.get('lancamentos');
  }

  //Deletar a key inteira do localStorage
  public removerChave(key: string) {
    this._storage?.remove(key);
  }
}
