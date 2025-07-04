import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QRCodeScreen = () => {
  const ticketInfo = {
    eventName: '音乐会《春天的故事》',
    date: '2025-04-15',
    time: '19:30',
    venue: '上海大剧院',
    seat: 'A区 5排 12座',
    ticketId: 'MT2025041500123',
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>电子票</Text>
        <View style={styles.placeholder} />
      </View>

      <View style={styles.ticketContainer}>
        <View style={styles.ticketHeader}>
          <Text style={styles.eventName}>{ticketInfo.eventName}</Text>
          <Text style={styles.ticketStatus}>已出票</Text>
        </View>

        <View style={styles.qrCodeContainer}>
          <QRCode
            value={JSON.stringify(ticketInfo)}
            size={200}
            color="#333"
            backgroundColor="white"
          />
        </View>

        <View style={styles.ticketDetails}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>演出时间</Text>
            <Text style={styles.detailValue}>{ticketInfo.date} {ticketInfo.time}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>演出场馆</Text>
            <Text style={styles.detailValue}>{ticketInfo.venue}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>座位信息</Text>
            <Text style={styles.detailValue}>{ticketInfo.seat}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>票务编号</Text>
            <Text style={styles.detailValue}>{ticketInfo.ticketId}</Text>
          </View>
        </View>

        <View style={styles.instructions}>
          <Text style={styles.instructionTitle}>入场须知</Text>
          <Text style={styles.instructionText}>• 请提前30分钟到达场馆</Text>
          <Text style={styles.instructionText}>• 入场时请出示此二维码</Text>
          <Text style={styles.instructionText}>• 请保持手机电量充足</Text>
          <Text style={styles.instructionText}>• 演出期间请将手机调至静音</Text>
        </View>
      </View>

      <View style={styles.bottomActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>⌖ 查看路线</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>☎ 联系客服</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 20,
    color: '#333',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  placeholder: {
    width: 40,
  },
  ticketContainer: {
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  ticketHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  eventName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  ticketStatus: {
    backgroundColor: '#4CAF50',
    color: 'white',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 12,
    fontWeight: 'bold',
  },
  qrCodeContainer: {
    alignItems: 'center',
    marginVertical: 20,
    padding: 20,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
  },
  ticketDetails: {
    marginVertical: 20,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  detailLabel: {
    fontSize: 14,
    color: '#666',
    flex: 1,
  },
  detailValue: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
    flex: 2,
    textAlign: 'right',
  },
  instructions: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#fff3cd',
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#ffc107',
  },
  instructionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#856404',
    marginBottom: 10,
  },
  instructionText: {
    fontSize: 14,
    color: '#856404',
    marginBottom: 5,
    lineHeight: 20,
  },
  bottomActions: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#FF6B6B',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  actionButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default QRCodeScreen;