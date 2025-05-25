import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const MovieTicket: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.ticket}>
        <View style={styles.movieInfo}>
          <Text style={styles.movieTitle}>长安三万里</Text>
          <Text style={styles.timeInfo}>07月30日 周日 20:30</Text>
          <Text style={styles.location}>万达影城(温州龙湾万达广场店)</Text>
        </View>
        
        <View style={styles.divider} />
        
        <View style={styles.seatInfo}></View>
          <Text style={styles.seatText}>7号厅 8排14座</Text>
          <Text style={styles.priceText}>￥45.9</Text>
        </View>
        
        <View style={styles.divider} />
        
        <View style={styles.qrcodeContainer}>
          <QRCode
            value="ticket-12345"
            size={100}
          />
          <Text style={styles.ticketNo}>取票码：1234 5678 90</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  ticket: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  movieInfo: {
    alignItems: 'center',
    marginBottom: 15,
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  timeInfo: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    color: '#888',
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 15,
  },
  seatInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seatText: {
    fontSize: 16,
    color: '#666',
  },
  priceText: {
    fontSize: 18,
    color: '#ff4d4f',
    fontWeight: 'bold',
  },
  qrcodeContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
  ticketNo: {
    marginTop: 10,
    fontSize: 14,
    color: '#888',
  },
});

export default MovieTicket;
