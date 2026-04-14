import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  StatusBar,
  Dimensions,
} from 'react-native';
import { Image } from 'expo-image';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PLUGINS, CATEGORIES, getCategoryColor, pluginImageUrl, type Plugin, type PluginCategory } from '@/data/plugins';
import { AbletonColors } from '@/constants/theme';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 2;

function PluginCard({ plugin, onPress }: { plugin: Plugin; onPress: () => void }) {
  const accentColor = getCategoryColor(plugin.category);

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.75}>
      <View style={[styles.cardImageContainer, { backgroundColor: accentColor + '11' }]}>
        <Image
          source={{ uri: pluginImageUrl(plugin.imageFile) }}
          style={styles.cardImage}
          contentFit="cover"
          transition={200}
        />
        <View style={[styles.cardImageOverlay, { backgroundColor: accentColor + '08' }]} />
      </View>

      <View style={styles.cardContent}>
        <View style={[styles.categoryBadge, { backgroundColor: accentColor + '22', borderColor: accentColor + '44' }]}>
          <View style={[styles.categoryDot, { backgroundColor: accentColor }]} />
          <Text style={[styles.categoryText, { color: accentColor }]}>{plugin.category}</Text>
        </View>
        <Text style={styles.cardTitle} numberOfLines={1}>{plugin.name}</Text>
        <Text style={styles.cardDescription} numberOfLines={2}>{plugin.description}</Text>
      </View>
    </TouchableOpacity>
  );
}

function CategoryFilter({
  selected,
  onSelect,
}: {
  selected: PluginCategory | 'All';
  onSelect: (cat: PluginCategory | 'All') => void;
}) {
  const tabs: (PluginCategory | 'All')[] = ['All', ...CATEGORIES];

  return (
    <View style={styles.filterContainer}>
      {tabs.map((tab) => {
        const isSelected = selected === tab;
        const color = tab === 'All' ? AbletonColors.orange : getCategoryColor(tab as PluginCategory);
        return (
          <TouchableOpacity
            key={tab}
            onPress={() => onSelect(tab)}
            style={[
              styles.filterTab,
              isSelected && { backgroundColor: color + '22', borderColor: color },
            ]}
            activeOpacity={0.7}>
            {isSelected && <View style={[styles.filterTabDot, { backgroundColor: color }]} />}
            <Text style={[styles.filterTabText, isSelected && { color }]}>
              {tab === 'Audio Effect' ? 'Audio FX' : tab === 'MIDI Effect' ? 'MIDI FX' : tab}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function PluginsScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<PluginCategory | 'All'>('All');

  const filtered = useMemo(() => {
    return PLUGINS.filter((p) => {
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        q === '' ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const counts = useMemo(() => {
    const all = PLUGINS.length;
    const inst = PLUGINS.filter((p) => p.category === 'Instrument').length;
    const fx = PLUGINS.filter((p) => p.category === 'Audio Effect').length;
    const midi = PLUGINS.filter((p) => p.category === 'MIDI Effect').length;
    return { all, inst, fx, midi };
  }, []);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="light-content" backgroundColor={AbletonColors.background} />

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerEyebrow}>Ableton Live</Text>
          <Text style={styles.headerTitle}>Plugins</Text>
        </View>
        <View style={styles.headerBadge}>
          <Text style={styles.headerBadgeText}>{counts.all}</Text>
        </View>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>⌕</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher un plugin..."
          placeholderTextColor={AbletonColors.textMuted}
          value={searchQuery}
          onChangeText={setSearchQuery}
          returnKeyType="search"
          clearButtonMode="while-editing"
        />
      </View>

      {/* Stats row */}
      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Text style={[styles.statCount, { color: AbletonColors.instrument }]}>{counts.inst}</Text>
          <Text style={styles.statLabel}>Instruments</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={[styles.statCount, { color: AbletonColors.audioEffect }]}>{counts.fx}</Text>
          <Text style={styles.statLabel}>Audio FX</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={[styles.statCount, { color: AbletonColors.midiEffect }]}>{counts.midi}</Text>
          <Text style={styles.statLabel}>MIDI FX</Text>
        </View>
      </View>

      {/* Category filter */}
      <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />

      {/* Results count */}
      {searchQuery.length > 0 && (
        <Text style={styles.resultsCount}>
          {filtered.length} résultat{filtered.length !== 1 ? 's' : ''}
        </Text>
      )}

      {/* Plugin grid */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <PluginCard plugin={item} onPress={() => {}} />
        )}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyIcon}>⊘</Text>
            <Text style={styles.emptyText}>Aucun plugin trouvé</Text>
            <Text style={styles.emptySubtext}>Essayez un autre terme ou catégorie</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AbletonColors.background,
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 20,
  },
  headerEyebrow: {
    fontSize: 11,
    fontWeight: '600',
    color: AbletonColors.orange,
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: AbletonColors.textPrimary,
    letterSpacing: -0.5,
  },
  headerBadge: {
    backgroundColor: AbletonColors.orange,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  headerBadgeText: {
    fontSize: 14,
    fontWeight: '700',
    color: AbletonColors.white,
  },

  // Search
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: AbletonColors.card,
    borderRadius: 12,
    marginHorizontal: 20,
    marginBottom: 16,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: AbletonColors.cardBorder,
  },
  searchIcon: {
    fontSize: 18,
    color: AbletonColors.textSecondary,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 44,
    color: AbletonColors.textPrimary,
    fontSize: 15,
  },

  // Stats
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 16,
    backgroundColor: AbletonColors.card,
    borderRadius: 12,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: AbletonColors.cardBorder,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statCount: {
    fontSize: 20,
    fontWeight: '700',
  },
  statLabel: {
    fontSize: 11,
    color: AbletonColors.textSecondary,
    marginTop: 2,
    fontWeight: '500',
  },
  statDivider: {
    width: 1,
    height: 28,
    backgroundColor: AbletonColors.cardBorder,
  },

  // Filter
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 12,
    gap: 8,
  },
  filterTab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: AbletonColors.cardBorder,
    backgroundColor: AbletonColors.card,
    gap: 5,
  },
  filterTabDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  filterTabText: {
    fontSize: 12,
    fontWeight: '600',
    color: AbletonColors.textSecondary,
    letterSpacing: 0.3,
  },

  // Results count
  resultsCount: {
    fontSize: 12,
    color: AbletonColors.textSecondary,
    paddingHorizontal: 20,
    marginBottom: 8,
  },

  // List
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 12,
    gap: 12,
  },

  // Card
  card: {
    width: CARD_WIDTH,
    backgroundColor: AbletonColors.card,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: AbletonColors.cardBorder,
  },
  cardImageContainer: {
    height: 100,
    width: '100%',
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardImageOverlay: {
    position: 'absolute',
    inset: 0,
  },
  cardContent: {
    padding: 12,
  },
  categoryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 6,
    borderWidth: 1,
    marginBottom: 6,
    gap: 4,
  },
  categoryDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
  },
  categoryText: {
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: AbletonColors.textPrimary,
    marginBottom: 4,
    letterSpacing: -0.2,
  },
  cardDescription: {
    fontSize: 11,
    color: AbletonColors.textSecondary,
    lineHeight: 16,
  },

  // Empty
  empty: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 40,
  },
  emptyIcon: {
    fontSize: 48,
    color: AbletonColors.textMuted,
    marginBottom: 12,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: '600',
    color: AbletonColors.textSecondary,
    marginBottom: 6,
  },
  emptySubtext: {
    fontSize: 13,
    color: AbletonColors.textMuted,
  },
});
