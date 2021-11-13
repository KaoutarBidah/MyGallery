import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup,ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:Object;
 // formData = new FormData();
  SERVER_URL = "http://localhost:8080/upload";
  uploadForm: FormGroup;  
  constructor(private authService:AuthService, private router:Router,private formBuilder: FormBuilder,private http: HttpClient) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
     err => {
       console.log(err);
       return false;
     });
     this.uploadForm = this.formBuilder.group({
      profile: [''],
      userdt:''
    });
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
     // alert((<HTMLInputElement>document.getElementById("userdtt")).value);
    }
  }
  onSubmit() {
    const formData = new FormData();
    console.log("testing");
    if(this.uploadForm.get('profile').value !='' ){
      formData.append('file', this.uploadForm.get('profile').value);
      // alert( this.uploadForm.get('userdt').value)
       formData.append('username',(<HTMLInputElement>document.getElementById("userdt")).value); // username
   
       this.http.post<any>(this.SERVER_URL, formData).subscribe(
         (res) => console.log(res),
         (err) => console.log(err)
       );
       window.location.reload();
    }else{
      alert("Please choose an image !");
    }

  }
  /*
  upload() {
    console.log("hiiiiiiiiiiii");
 alert(this.formData);
    return this.http.post('upload', this.formData.get('file')).subscribe(
      (response) => {
        alert('File Uploaded Successfully : ' + this.formData.get('photo'))
        //alert(response.toString());
      },
      (error) => {
        alert('Something Went Wrong !!!')
      }
    );
  }
  handleImage(files: FileList) {
    this.formData.delete('photo');
    this.formData.append('photo', files[0]);
  }
  */
  

}
