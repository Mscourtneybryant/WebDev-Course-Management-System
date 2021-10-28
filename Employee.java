package com.coursemanagement.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "employees")
public class Employee {
	
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;
  
  @Column(name = "first_name")
  private String firstName;
  
  @Column(name = "last_name")
  private String lastName;
  
  @Column(name = "email_id")
  private String emailId;
  
  @Column(name = "student_major")
  private String studentMajor;
  
  @Column(name = "student_grade")
  private String studentGrade;
  
  @Column(name = "student_courses")
  private String studentCourses;
  
  @Column(name = "notes")
  private String notes;


public Employee() {
	
}

public Employee(String firstName, String lastName, String emailId, String studentMajor, String studentGrade, String studentCourses, String notes) {
	super();
	this.firstName = firstName;
	this.lastName = lastName;
	this.emailId = emailId;
	this.studentMajor = studentMajor;
	this.studentGrade = studentGrade;
	this.studentCourses = studentCourses;
	this.notes = notes;
}
public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}
public String getFirstName() {
	return firstName;
}
public void setFirstName(String firstName) {
	this.firstName = firstName;
}
public String getLastName() {
	return lastName;
}
public void setLastName(String lastName) {
	this.lastName = lastName;
}
public String getEmailId() {
	return emailId;
}
public void setEmailId(String emailId) {
	this.emailId = emailId;
}
public String getStudentMajor() {
	return studentMajor;
}
public void setStudentMajor(String studentMajor) {
	this.studentMajor = studentMajor;
}

public String getStudentGrade() {
	return studentGrade;
}
public void setStudentGrade(String studentGrade) {
	this.studentGrade = studentGrade;
}

public String getStudentCourses() {
	return studentCourses;
}
public void setStudentCourses(String studentCourses) {
	this.studentCourses = studentCourses;
}
public String getNotes() {
	return notes;
}

public void setNotes(String notes) {
	this.notes = notes;
}



}
