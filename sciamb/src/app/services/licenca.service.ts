import { Injectable } from '@angular/core';
import { Licenca } from 'src/app/transference-objects/licenca';
import { BehaviorSubject } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LicencaService {
  private licencaSource = new BehaviorSubject({licenca:null, key:''});
  currentLicenca = this.licencaSource.asObservable();
  constructor(private _db: AngularFireDatabase) { }

  changeLicenca(licenca: Licenca, key: string)
  {
    this.licencaSource.next({licenca: licenca, key: key});
  }

  insert(licenca: Licenca)
  {
    this._db.list('licenca').push(licenca);
  }

  selectAll()
  {
    return this._db.list('licenca')
    .snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map(c => ({key: c.payload.key, ...c.payload.val() }));
      })
    );
  }
}
