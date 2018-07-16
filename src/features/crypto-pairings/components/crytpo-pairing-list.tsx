import * as React from 'react';
import {Table} from 'antd';
import {round, toUpper} from 'lodash';
import styled from 'styled-components';
// @ts-ignore
import * as Icon from 'react-cryptocoins';

import {TickerCollection, Ticker} from '../models';
import {splitCryptoPairingSymbol, numToLocale} from "../../../utils/transformer";
import * as models from "../models";

interface Props {
  pairings: TickerCollection;
  rowClickHandler: (ticker: models.Ticker, index: number) => void;
}

const StyledIconWrapper = styled.span`
  margin-right: 10px;
  position: relative;
  top: 4px;
  width: 40px;
  display: inline-block;
`;

const StyledWrapper = styled.span`
  position: relative;
  top: -6px;
`;

const columns = [{
  dataIndex: 'symbol',
  render: (symbol: string) => {
    const cryptos = splitCryptoPairingSymbol(symbol);
    const CryptoIcon = Icon[cryptos[0]];
    return (
      <React.Fragment>
        <StyledIconWrapper>{CryptoIcon && <CryptoIcon size={30}/>}</StyledIconWrapper>
        <StyledWrapper>{toUpper(`${cryptos[0]}/${cryptos[1]}`)}</StyledWrapper>
      </React.Fragment>
    )
  },
  title: 'Symbol',
},
  {
    dataIndex: 'lastPrice',
    render: (value: number) => `${numToLocale(value)}`,
    title: 'Last Price',
  },
  {
    dataIndex: 'high',
    render: (value: number) => `${numToLocale(value)}`,
    title: '24h High',
  },
  {
    dataIndex: 'low',
    render: (value: number) => `${numToLocale(value)}`,
    title: '24h Low',
  },
  {
    dataIndex: 'dailyChangePerc',
    render: (value: number) => `${round(round(value * 100, 2), 1)}%`,
    title: '24h Change',
  }];

const CryptoPairingList = ({pairings, rowClickHandler}: Props) => {
  const onRowHandler = (record: Ticker, index: number) => {
    return {
      onClick: () => {
        rowClickHandler(record, index);
      }
    }
  };
  return (
    <Table
      columns={columns}
      dataSource={pairings}
      rowKey="symbol"
      onRow={onRowHandler}
    />
  )
};

export default CryptoPairingList;
