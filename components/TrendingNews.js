import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles/TrendingNews.style'

export default function TrendingNews() {
  const newsItems = [
    {
      category: '#Technology',
      title: 'AI Tools Revolutionize Design',
      content: 'Designers worldwide are embracing AI tools to...',
    },
    {
      category: '#Technology',
      title: 'AI Tools Revolutionize Design',
      content: 'Designers worldwide are embracing AI tools to...',
    },
    {
      category: '#Technology',
      title: 'AI Tools Revolutionize Design',
      content: 'Designers worldwide are embracing AI tools to...',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Trending</Text>
      
      {newsItems.map((item, index) => (
        <View key={index} style={styles.newsItem}>
          <Text style={styles.category}>{item.category}</Text>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.content}>{item.content}</Text>
        </View>
      ))}

      <TouchableOpacity style={styles.seeAllButton}>
        <Text style={styles.seeAllText}>See All Trending News</Text>
      </TouchableOpacity>
    </View>
  );
};
