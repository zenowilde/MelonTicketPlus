import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

interface MusicEvent {
  id: number;
  name: string;
  title: string;
  date: string;
  location: string;
  image: string;
  price?: string;
  category?: string;
}

interface MusicSectionProps {
  musicEvents: MusicEvent[];
}

const MusicSection: React.FC<MusicSectionProps> = ({ musicEvents }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    const weekday = weekdays[date.getDay()];
    return { month, day, weekday };
  };

  const getMusicIcon = (category?: string) => {
    switch (category) {
      case '古典音乐': return '♪';
      case '流行音乐': return '♩';
      case '民谣': return '♬';
      default: return '♫';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.sectionTitle}>♫ 音乐专区</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>全部音乐演出</Text>
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={musicEvents}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => {
          const dateInfo = formatDate(item.date);
          return (
            <TouchableOpacity style={styles.musicCard}>
              <View style={styles.dateSection}>
                <Text style={styles.month}>{dateInfo.month}月</Text>
                <Text style={styles.day}>{dateInfo.day}</Text>
                <Text style={styles.weekday}>{dateInfo.weekday}</Text>
              </View>
              
              <View style={styles.contentSection}>
                <View style={styles.iconContainer}>
                  <Text style={styles.musicIcon}>{getMusicIcon(item.category)}</Text>
                </View>
                
                <View style={styles.textContainer}>
                  <Text style={styles.musicTitle} numberOfLines={1}>{item.title}</Text>
                  <Text style={styles.musicLocation} numberOfLines={1}>{item.location}</Text>
                  <Text style={styles.musicCategory}>{item.category}</Text>
                </View>
                
                <View style={styles.priceContainer}>
                  <Text style={styles.musicPrice}>{item.price}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginBottom: 100, // 给底部导航留出空间
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  viewAllText: {
    fontSize: 14,
    color: '#4A90E2',
    fontWeight: '500',
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  musicCard: {
    width: 280,
    marginRight: 15,
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    overflow: 'hidden',
  },
  dateSection: {
    backgroundColor: '#4A90E2',
    paddingVertical: 15,
    alignItems: 'center',
  },
  month: {
    fontSize: 12,
    color: 'white',
    fontWeight: '500',
  },
  day: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginVertical: 2,
  },
  weekday: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  contentSection: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  musicIcon: {
    fontSize: 20,
  },
  textContainer: {
    flex: 1,
  },
  musicTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  musicLocation: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  musicCategory: {
    fontSize: 12,
    color: '#999',
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  musicPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
});

export default MusicSection;
