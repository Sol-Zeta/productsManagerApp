import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {IconButton, StandardButton} from '../Button';
import {icons} from '../../assetsRoutes';
import {styles} from './styles';

interface Props {
  title?: string;
  text?: string;
  openModal: boolean;
  primaryButton?: string;
  primaryOnPress?: () => void;
  secondaryButton?: string;
  secondaryOnPress?: () => void;
  onClose: () => void;
  children?: JSX.Element | JSX.Element[];
}

export const Modal = ({
  title,
  text,
  openModal,
  primaryButton,
  primaryOnPress,
  secondaryButton,
  secondaryOnPress,
  children,
}: Props) => {
  const [isOpen, setIsOpen] = useState(openModal);

  return (
    <>
      {isOpen ? (
        <View style={styles.background}>
            <View style={styles.container}>
                <View style={styles.header}>
                    {title && <Text style={styles.title}>{title}</Text>}
                    <IconButton small icon={icons.close} onPress={() => setIsOpen(false)}/>
                </View>
                {text && <Text style={styles.text}>{text}</Text>}
                {children}
            {(primaryButton || secondaryButton) && (
                <View style={styles.buttons_container}>
                {secondaryButton && secondaryOnPress && (
                    <StandardButton
                        secondary
                        text={secondaryButton}
                        onPress={secondaryOnPress}
                        customStyle={styles.button_standard}
                    />
                )}
                {primaryButton && primaryOnPress && (
                    <StandardButton 
                        text={primaryButton} 
                        onPress={primaryOnPress} 
                        customStyle={styles.button_standard}
                    />
                )}
                </View>
            )}
            </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
};
