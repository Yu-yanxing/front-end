package ecsite.ex.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import login.com.ex.models.dao.AdminDao;
import login.com.ex.models.entity.AdminEntity;


@Service
public class AdminService {
	@Autowired
	private AdminDao adminDao;
	//戻り値がboolean メソッド名createAdmin
	//もしメールアドレスで検索をかけてnullだったら保存をしてtrueを返す
	//そうでない場合はfalseを返すメソッドを書いて下さい
	public boolean createAdmin(String email,String name,String password) {
		if(adminDao.findByAdminName(name)==null) {
		adminDao.save(new AdminEntity(email,name,password));	
		    return true;
		}else {
			return false;
		}
	}
	
}
