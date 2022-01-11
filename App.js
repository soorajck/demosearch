import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  SectionList,
  Text,
  View,
} from 'react-native';
import _ from 'lodash';

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState('');
  const [processedData, setProcessedData] = React.useState([]);
  const DATA = [
    {
      title: 'Delhi',
      data: ['1,484 km²', '1.9 crores (2012)', '11,312'],
    },
    {
      title: 'Mumbai',
      data: ['1,484 km²', '1.9 crores (2012)', '11,312'],
    },
    {
      title: 'Kerala',
      data: ['1,484 km²', '1.9 crores (2012)', '11,312'],
    },
    {
      title: 'Maharashra',
      data: ['1,484 km²', '1.9 crores (2012)', '11,312'],
    },
    {
      title: 'Punjab',
      data: ['1,484 km²', '1.9 crores (2012)', '11,312'],
    },
    {
      title: 'Pune',
      data: ['1,484 km²', '1.9 crores (2012)', '11,312'],
    },
    {
      title: 'Harayana',
      data: ['1,484 km²', '1.9 crores (2012)', '11,312'],
    },
    {
      title: 'Tamilnadu',
      data: ['1,484 km²', '1.9 crores (2012)', '11,312'],
    },
    {
      title: 'Bihar',
      data: ['1,484 km²', '1.9 crores (2012)', '11,312'],
    },
    {
      title: 'Belgium',
      data: ['1,484 km²', '1.9 crores (2012)', '11,312'],
    },
    {
      title: 'Bangladesh',
      data: ['1,484 km²', '1.9 crores (2012)', '11,312'],
    },
    {
      title: 'Bangladesh',
      data: ['1,484 km²', '1.9 crores (2012)', '11,312'],
    },
    {
      title: 'Assam',
      data: ['1,484 km²', '1.9 crores (2012)', '11,312'],
    },
    {
      title: 'Karnataka',
      data: ['1,484 km²', '1.9 crores (2012)', '11,312'],
    },
  ];

  const handleChange = text => {
    onChangeText(text);
    const length = text.length;
    const filteredData = _.filter(DATA, item => {
      return item.title.toLowerCase().slice(0, length) === text.toLowerCase();
    });
    setProcessedData(filteredData);
  };

  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={text => handleChange(text)}
        value={text}
      />
      <View style={styles.dataContainer}>
        <SectionList
          sections={processedData}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => <Item title={item} />}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  item: {
    backgroundColor: '#ede9df',
    padding: 10,
    marginVertical: 8,
  },
  header: {
    fontSize: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
  },
  dataContainer: {
    backgroundColor: '#fff',
    padding: 10,
  },
});

export default UselessTextInput;
