/*
 Navicat Premium Data Transfer

 Source Server         : puffovo
 Source Server Type    : MySQL
 Source Server Version : 80029
 Source Host           : localhost:3306
 Source Schema         : puffovo

 Target Server Type    : MySQL
 Target Server Version : 80029
 File Encoding         : 65001

 Date: 09/07/2022 10:30:15
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for comic
-- ----------------------------
DROP TABLE IF EXISTS `comic`;
CREATE TABLE `comic`  (
  `_id` int(0) NOT NULL AUTO_INCREMENT,
  `path` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
