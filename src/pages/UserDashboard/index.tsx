import { useEffect, useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { FlatList } from 'react-native-gesture-handler';
import { ListRenderItem, ScrollView, View } from 'react-native';

import api from '../../services/CoinMarketCapApi';
import { API_KEY } from '../../utils/CoinMarketCapCredential';
import { ICryptocurrency } from '../../utils/interfaces';

import { Container, Wrapper } from './styles';
import TouchableButton from '../../components/TouchableButton';

const HomePage = () => {
  const [cryptocurrency, setCryptocurrency] = useState<ICryptocurrency[]>([]);
  const { navigate } = useNavigation();

  useEffect(() => {
    async function fetchData() {
      const request = await api.get("cryptocurrency/map?limit=45", {
        headers: {
          "X-CMC_PRO_API_KEY": API_KEY
        }
      })
      setCryptocurrency(request.data.data);
      return request;     
    }

    fetchData();
  }, [])

  const renderItem: ListRenderItem<ICryptocurrency> = ({ item }) => (
    <Wrapper key={item.id}> 
      <TouchableButton 
        color='#6A5ACD'
        onPress={() => navigate("NegotiationPage", {
          name: item.name,
          id: item.id,
        })}
      >
          {item.name}
      </TouchableButton>
    </Wrapper>
  )

  return (
    <Container>
      <ScrollView>
        <View>
          <FlatList
            data={cryptocurrency}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
          />
        </View>
      </ScrollView>
    </Container>
  );
};

export default HomePage;
