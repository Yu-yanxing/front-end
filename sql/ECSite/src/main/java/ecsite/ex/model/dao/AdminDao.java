package ecsite.ex.model.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import ecsite.ex.model.entity.AdminEntity;

public interface AdminDao extends JpaRepository<AdminEntity, Long> {
	//保存するメソッド
	//Where admin_email=?となるメソッドを記載して下さい
	//Where admin_email=?And password=?となるメソッドを記載して下さい
}
