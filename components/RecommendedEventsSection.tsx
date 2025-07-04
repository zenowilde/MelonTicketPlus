import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

interface EventItem {
  id: number;
  name: string;
  title: string;
  date: string;
  location: string;
  image: string;
  price?: string;
  category?: string;
}

interface RecommendedEventsSectionProps {
  events: EventItem[];
}

const RecommendedEventsSection: React.FC<RecommendedEventsSectionProps> = ({ events }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}月${day}日`;
  };

  const getCategoryColor = (category?: string) => {
    switch (category) {
      case '音乐会': return '#4A90E2';
      case '话剧': return '#5BC0DE';
      case '音乐节': return '#6C7B7F';
      default: return '#708090';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.sectionTitle}>★ 热门推荐</Text>
        <TouchableOpacity>
          <Text style={styles.moreText}>查看更多</Text>
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={events}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.eventCard}>
            <View style={styles.imageContainer}>
              <View style={styles.placeholderImage}>

              </View>
              <View style={[styles.categoryBadge, { backgroundColor: getCategoryColor(item.category) }]}>
                <Text style={styles.categoryText}>{item.category}</Text>
              </View>
            </View>
            
            <View style={styles.cardContent}>
              <Text style={styles.eventTitle} numberOfLines={2}>{item.title}</Text>
              <Text style={styles.eventLocation}>⌖ {item.location}</Text>
              <Text style={styles.eventDate}>☷ {formatDate(item.date)}</Text>
              {item.price && (
                <Text style={styles.eventPrice}>{item.price}</Text>
              )}
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
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
  moreText: {
    fontSize: 14,
    color: '#4A90E2',
    fontWeight: '500',
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  eventCard: {
    width: 180,
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
  imageContainer: {
    position: 'relative',
  },
  placeholderImage: {
    width: '100%',
    height: 120,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 36,
  },
  categoryBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  categoryText: {
    fontSize: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  cardContent: {
    padding: 15,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    lineHeight: 20,
  },
  eventLocation: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  eventDate: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  eventPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
});

export default RecommendedEventsSection;
