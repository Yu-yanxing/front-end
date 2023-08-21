package ecsite.ex.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import ecsite.ex.service.AdminService;

@Controller
public class RegisterController {
	//@Autowiredを使用してAdminServiceクラスを読み込んで下さい
	
	/* URLが　/register getRegisterPage() メソッドは、"admin_register" 
	 * というビュー（画面）を表示することで、登録画面を表示できるようにソースを書いて下さい*/
	
	/*登録画面から入力内容を受け取って
	 *もし、adminテーブル内に登録したメールアドレスが存在しなかった場合、テーブルに保存処理をして
	 *ログイン画面を表示し、保存出来ない場合は、登録画面を表示するようにして下さい */
	
	@Autowired
	private AdminService adminService;
	
	@GetMapping("/admin_register")
	public String getRegisterPage() {
	 return "admin_register.html";
	}

	@PostMapping("/register/process")
	public String register(@RequestParam String adminName,
			@RequestParam String adminEmail,
			@RequestParam String password) {
		
		if(adminService.createAdmin(adminName, adminEmail, password)) {
			return "admin_login.html";
	    }else{
		    return "admin_register.html";
	}
     }
      }