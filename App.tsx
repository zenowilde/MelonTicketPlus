import React from 'react';
import { View } from 'react-native';
import TopWelcomeSection from './components/TopWelcomeSection';
import PublicSaleSection from './components/PublicSaleSection';
import RecommendedEventsSection from './components/RecommendedEventsSection';
import MusicSection from './components/MusicSection';
import AppNavigator from './components/AppNavigator';
interface Event {
  id: number;
  name: string; // 可作为 title 使用
  date: string;
  location: string;
  title: string; // 兼容 MusicEvent 的 title 字段
  image: string; // 新增 image 字段
}

const App = () => {
  const events: Event[] = [
    // 示例数据（可选）
    // { id: 1, name: '音乐会A', date: '2025-04-05', location: '上海' }
  ];

  const musicEvents: Event[] = [
    // 可以同样定义类型，此处省略
  ];

  return (
    <View style={{ flex: 1 }}>
      <TopWelcomeSection />
      <PublicSaleSection />
      <RecommendedEventsSection events={events} />
      <MusicSection musicEvents={musicEvents} />
      <AppNavigator />
    </View>
  );
};

export default App;