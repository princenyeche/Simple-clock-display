import {useCallback} from 'react';
// import {token} from '@atlaskit/tokens';
import { FaCheckCircle } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { GoAlertFill } from "react-icons/go";
// import {G300, P300, R300, Y300} from '@atlaskit/theme/colors';
import {useFlags, type DismissFn} from '@atlaskit/flag';
import type {Any, MessageContextType} from '../scripts/DataTypes';

export function useFlash(): Any {

    const { showFlag } = useFlags();

  return useCallback((message: MessageContextType , type: string): DismissFn | undefined => {
      const actions: {
          content: string;
          href: string;
          target: string;
          rel: string
      }[] = [
          {
              content: message.content,
              href: 'https://github.com/princenyeche/simple-clock',
              target: '_blank',
              rel: 'noreferrer',
          },
      ];

      if (type === 'info') {
          return showFlag({
              actions,
              description: `${message.description}`,
              icon: (
                  <FaInfoCircle />
              ),
              title: `${message.title}`,
              isAutoDismiss: true,
          });

      }
      else if (type === 'success') {
          return showFlag({
              actions,
              description: `${message.description}`,
              icon: (
                  <FaCheckCircle />
              ),
              title: `${message.title}`,
              isAutoDismiss: true,
          });
      } else if (type === 'warning') {
          return showFlag({
              actions,
              description: `${message.description}`,
              icon: (
                  <GoAlertFill />
              ),
              title: `${message.title}`,
              isAutoDismiss: true,
          });
      }
      // this represents the danger alert
      else {
          return showFlag({
              actions,
              description: `${message.description}`,
              icon: (
                  <FaWindowClose />
              ),
              title: `${message.title}`,
              isAutoDismiss: true,
          });
      }

  }, [showFlag]);
}