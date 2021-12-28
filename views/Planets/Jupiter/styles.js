import syted from 'styled-components/react-native';

export const Container = syted.View`
    flex: 1;
    background-color: #000;
`;

export const Title = syted.Text`
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
`;

export const Description = syted.Text`
    color: #fff;
    font-size: 16px;
    text-align: center;
    margin-top: 20px;
`;
