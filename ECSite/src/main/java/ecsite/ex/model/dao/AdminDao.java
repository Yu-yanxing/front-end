package ecsite.ex.model.dao;



import org.springframework.data.jpa.repository.JpaRepository;

import ecsite.ex.model.entity.AdminEntity;

public interface AdminDao extends JpaRepository<AdminEntity, Long> {
	//保存するメソッド
	//Where admin_email=?となるメソッドを記載して下さい
	//Where admin_email=?And password=?となるメソッドを記載して下さい
	//练习-以上为老师提示；
	
	AdminEntity save(AdminEntity adminEntity);
	
	AdminEntity findByAdminName(String adminEmail);
	
	AdminEntity findByAdminEmailAndPassword(String adminEmail,String password);
	
	////保存するメソッド
	//AdminEntity save(AdminEntity adminEntity);
	//Where admin_email=?となるメソッドを記載して下さい
	//AdminEntity findByAdminEmail(String adminEmail);
	//Where admin_email=?And password=?となるメソッドを記載して下さい
	//AdminEntity findByAdminEmailAndPassword(String adminEmail,String password);
	
	
}
