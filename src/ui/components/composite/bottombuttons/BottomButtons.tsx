import React from 'react';
import { EduButton } from '../../atomic/button/EduButton';
import { View } from 'react-native';

export interface IBottomButtonData {
    translationKey: string;
    action: () => void;
    extraprops?: any;
}
export interface IBottomButtons {
    data: IBottomButtonData[];
    lang?: string;
}

const getExtraProps = (data: IBottomButtonData) => {
    if (data.extraprops) return data.extraprops
    return {}
}

export default (props: IBottomButtons) => (
    <View style={{ minHeight: 128 }}>
        {props.data.map((e, i) => <EduButton {...getExtraProps(props.data[i])} key={i} feedbacktype="opacity" center onPress={e.action} translationKey={e.translationKey} lang={props.lang} />)}
    </View>
);