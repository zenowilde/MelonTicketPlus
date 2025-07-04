import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

const ProfileScreen = () => {
  const menuItems = [
    { icon: '⊞', title: '我的订单', subtitle: '查看所有订单' },
    { icon: '♥', title: '我的收藏', subtitle: '已收藏的演出' },
    { icon: '⌖', title: '地址管理', subtitle: '管理收货地址' },
    { icon: '⌘', title: '支付方式', subtitle: '管理支付方式' },
    { icon: '☷', title: '优惠券', subtitle: '查看可用优惠券' },
    { icon: '⚬', title: '邀请好友', subtitle: '邀请好友获得奖励' },
    { icon: '⚙', title: '设置', subtitle: '应用设置' },
    { icon: '☎', title: '客服帮助', subtitle: '联系客服' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* 用户信息区域 */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatar}>⚬</Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>用户名</Text>
            <Text style={styles.userLevel}>普通会员</Text>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>编辑</Text>
          </TouchableOpacity>
        </View>
        
        {/* 统计信息 */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>已购票</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>已收藏</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>待观看</Text>
          </View>
        </View>
        
        {/* 快捷操作 */}
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.quickActionItem}>
            <Text style={styles.quickActionIcon}>¥</Text>
            <Text style={styles.quickActionText}>余额</Text>
            <Text style={styles.quickActionValue}>¥0.00</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickActionItem}>
            <Text style={styles.quickActionIcon}>★</Text>
            <Text style={styles.quickActionText}>积分</Text>
            <Text style={styles.quickActionValue}>1,250</Text>
          </TouchableOpacity>
        </View>
        
        {/* 菜单列表 */}
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <Text style={styles.menuIcon}>{item.icon}</Text>
              <View style={styles.menuContent}>
                <Text style={styles.menuTitle}>{item.title}</Text>
                <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
              </View>
              <Text style={styles.menuArrow}>›</Text>
            </TouchableOpacity>
          ))}
        </View>
        
        {/* 退出登录 */}
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>退出登录</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 10,
  },
  avatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FF6B6B',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  avatar: {
    fontSize: 30,
    color: 'white',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  userLevel: {
    fontSize: 14,
    color: '#666',
  },
  editButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FF6B6B',
  },
  editButtonText: {
    fontSize: 14,
    color: '#FF6B6B',
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 20,
    marginBottom: 10,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6B6B',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  statDivider: {
    width: 1,
    backgroundColor: '#f0f0f0',
    marginVertical: 10,
  },
  quickActions: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 10,
  },
  quickActionItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    borderRightWidth: 1,
    borderRightColor: '#f0f0f0',
  },
  quickActionIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  quickActionText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  quickActionValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  menuContainer: {
    backgroundColor: 'white',
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuIcon: {
    fontSize: 20,
    marginRight: 15,
    width: 25,
    textAlign: 'center',
  },
  menuContent: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 2,
  },
  menuSubtitle: {
    fontSize: 12,
    color: '#999',
  },
  menuArrow: {
    fontSize: 20,
    color: '#ccc',
  },
  logoutButton: {
    backgroundColor: 'white',
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  logoutText: {
    fontSize: 16,
    color: '#FF6B6B',
    fontWeight: '500',
  },
});

export default ProfileScreen;