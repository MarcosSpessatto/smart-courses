-- MySQL Workbench Synchronization
-- Generated: 2017-09-19 13:20
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: marcos.defendi

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

CREATE SCHEMA IF NOT EXISTS `ia` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE IF NOT EXISTS `ia`.`course` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(500) NOT NULL,
  `start` DATE NOT NULL,
  `end` DATE NOT NULL,
  `teacher` INT(11) NOT NULL,
  `weight` INT(11) NOT NULL,
  `modality` INT(11) NOT NULL,
  `area` INT(11) NULL DEFAULT NULL,
  `sector` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_course_teacher_idx` (`teacher` ASC),
  INDEX `fk_course_modality1_idx` (`modality` ASC),
  INDEX `fk_course_area1_idx` (`area` ASC),
  INDEX `fk_course_sector1_idx` (`sector` ASC),
  CONSTRAINT `fk_course_teacher`
    FOREIGN KEY (`teacher`)
    REFERENCES `ia`.`teacher` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_course_modality1`
    FOREIGN KEY (`modality`)
    REFERENCES `ia`.`modality` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_course_area1`
    FOREIGN KEY (`area`)
    REFERENCES `ia`.`area` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_course_sector1`
    FOREIGN KEY (`sector`)
    REFERENCES `ia`.`sector` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `ia`.`sector` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  `area` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_sector_area1_idx` (`area` ASC),
  CONSTRAINT `fk_sector_area1`
    FOREIGN KEY (`area`)
    REFERENCES `ia`.`area` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `ia`.`employee` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  `function` VARCHAR(200) NOT NULL,
  `blocked` TINYINT(4) NOT NULL DEFAULT 0,
  `badge` VARCHAR(45) NULL DEFAULT NULL,
  `sector` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_employee_sector1_idx` (`sector` ASC),
  CONSTRAINT `fk_employee_sector1`
    FOREIGN KEY (`sector`)
    REFERENCES `ia`.`sector` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `ia`.`teacher` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `ia`.`modality` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `ia`.`course_employee` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `employee` INT(11) NOT NULL,
  `course` INT(11) NOT NULL,
  `done` TINYINT(4) NOT NULL,
  `validity` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`, `employee`, `course`),
  INDEX `fk_course_employee_employee1_idx` (`employee` ASC),
  INDEX `fk_course_employee_course1_idx` (`course` ASC),
  CONSTRAINT `fk_course_employee_employee1`
    FOREIGN KEY (`employee`)
    REFERENCES `ia`.`employee` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_course_employee_course1`
    FOREIGN KEY (`course`)
    REFERENCES `ia`.`course` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `ia`.`area` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
