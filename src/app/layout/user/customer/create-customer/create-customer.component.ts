import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { SnackbarService } from 'src/app/shared/alerts/snackbar.service';
import { UserService } from 'src/app/shared/services/user.service';
import { LocationService } from 'src/app/shared/services/location/location.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {

  form: FormGroup;
  block: boolean = false;
  canEdit: boolean = false;
  countries: any[];
  regions: any[];
  states: any[];
  cities: any[];
  districts: any[];

  country_id: number;
  state_id: number;
  city_id: number;
  district_id: number;
  
  constructor(
    private fb: FormBuilder, 
    public dialogRef: MatDialogRef<CreateCustomerComponent>, 
    private snackbar: SnackbarService, 
    private locService: LocationService,   
    private service: UserService) { }

  ngOnInit() {
    this.getForm(); 
    if(this.service.user.id != undefined) { 
      this.canEdit = true;
      this.country_id = this.service.customer.fk_id_pais;
      this.state_id = this.service.customer.fk_id_estado;
      this.city_id = this.service.customer.fk_id_cidade;
      this.district_id = this.service.customer.fk_id_bairro;
    }
    this.getRegions();
    this.getCountries(); 
  }


  getForm() {
    this.form = this.fb.group({
      nome: [this.service.user.nome || '', Validators.required],
      email: [this.service.user.email || '', Validators.required],
      password: [''],
      
      cnpj: [this.service.customer.cnpj || ''],
      responsavel_nome: [this.service.customer.responsavel_nome || ''],
      responsavel_telefone: [this.service.customer.responsavel_telefone || ''],
      responsavel_celular: [this.service.customer.responsavel_celular || ''],
      responsavel_email: [this.service.customer.responsavel_email || ''],
      responsavel2_nome: [this.service.customer.responsavel2_nome || ''],
      responsavel2_telefone: [this.service.customer.responsavel2_telefone || ''],
      responsavel2_celular: [this.service.customer.responsavel2_celular || ''],
      responsavel2_email: [this.service.customer.responsavel2_email || ''], 
   
      valor_cliente_parecer: [this.service.customer.valor_cliente_parecer || ''],
      valor_fornecedor_parecer: [this.service.customer.valor_fornecedor_parecer || ''],
      valor_cliente_negociacao: [this.service.customer.valor_cliente_negociacao || ''],
      valor_proposto_negociacao: [this.service.customer.valor_proposto_negociacao || ''],
      valor_negociado_negociacao: [this.service.customer.valor_negociado_negociacao || ''],
      valor_negociadoC_negociacao: [this.service.customer.valor_negociadoC_negociacao || ''],
      fk_id_pais: [this.service.customer.fk_id_pais || ''],
      fk_id_regiao: [this.service.customer.fk_id_regiao || ''],
      fk_id_estado: [this.service.customer.fk_id_estado || ''],
      fk_id_cidade: [this.service.customer.fk_id_cidade || ''],
      fk_id_bairro:[this.service.customer.fk_id_bairro || ''],
      fk_id_logradouro:[this.service.customer.fk_id_logradouro || ''], 
      complemento_endereco: [this.service.customer.complemento_endereco || ''],
      numero: [this.service.customer.numero || ''],
    });
  }


  getRegions() {
    this.locService.getRegions()
      .subscribe(regions => {
        this.regions = regions
      });
  }


  getCountries() { 
    this.locService.getCoutries()
      .subscribe(countries => {
        this.countries = countries
      });
  }

  changeCountry(ev) { 
    this.getStates(ev);
  }

  getStates(ev) { 
    this.locService.getStates()
      .subscribe(states => {
        this.states = states.filter(e => e.fk_id_pais == ev);
        if(this.states.length == 0) {
          this.getCities(null);
          this.getDistricts(null);
        }
      });
  }

  changeState(ev) { 
    this.getCities(ev);
  }

  getCities(ev) {
    this.locService.getCities()
      .subscribe(cities => {
        this.cities = cities.filter(e => e['fk_id_estado'] == ev)
      });
  }

  changeCity(ev) { 
    this.getDistricts(ev);
  }

  getDistricts(ev) {
    this.locService.getDistricts()
      .subscribe(districts => {
        this.districts = districts.filter(e => e['fk_id_cidade'] == ev)
      });
  }


  save() { 
    this.block = true;
    if(this.service.user.id != undefined) { 
      this.form.value.id = this.service.user.id;  
      this.service.updateCustomer(this.form.value)
        .subscribe(() => {
          this.closeDialog();
        })
    } else {
      if(this.form.value.senha == '') {
        this.snackbar.message('Campo senha obrigatório');
        this.block = false;
      } else {
        this.service.createCustomer(this.form.value)
        .subscribe((res) => {  
          console.log(res);
          this.closeDialog();
        });
      }
    }    
  }


  closeDialog() {
    this.dialogRef.close(true);
  }


}


