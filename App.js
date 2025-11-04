import { useMemo, useState } from "react";
import { StatusBar } from "expo-status-bar";
import * as Localization from "expo-localization";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
} from "react-native";
import { getBestLocale, i18n, setLocale, supportedLocales } from "./src/i18n";

const appTabs = ["overview", "courses", "settings"];
const courseKeys = ["softwareEngineering", "dataScience", "humanities"];

export default function App() {
  const [currentLocale, setCurrentLocale] = useState(() => {
    const locales = Localization.getLocales ? Localization.getLocales() : [];
    const best = getBestLocale(locales);
    return setLocale(best);
  });
  const [stage, setStage] = useState("language");
  const [activeTab, setActiveTab] = useState("overview");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileName, setProfileName] = useState(i18n.t("login.fallbackName"));

  const overviewQuickStats = useMemo(
    () => i18n.t("overview.quickStats", { returnObjects: true }),
    [currentLocale]
  );
  const overviewNextUp = useMemo(
    () => i18n.t("overview.nextUp", { returnObjects: true }),
    [currentLocale]
  );
  const overviewNotifications = useMemo(
    () => i18n.t("overview.notifications", { returnObjects: true }),
    [currentLocale]
  );
  const courseEntries = useMemo(
    () =>
      courseKeys.map((key) => ({
        key,
        ...i18n.t(`courses.list.${key}`, { returnObjects: true }),
      })),
    [currentLocale]
  );
  const settingsContent = useMemo(
    () => i18n.t("settings", { returnObjects: true }),
    [currentLocale]
  );

  const renderLocaleButtons = (alignment = "center") => (
    <View
      style={[
        styles.pillRow,
        alignment === "start" ? styles.pillRowStart : styles.pillRowCenter,
      ]}
    >
      {supportedLocales.map((locale) => {
        const isActive = currentLocale === locale.code;
        return (
          <Pressable
            key={locale.code}
            style={[styles.pillButton, isActive && styles.pillButtonActive]}
            onPress={() => {
              const selected = setLocale(locale.code);
              setCurrentLocale(selected);
              if (!email) {
                setProfileName(i18n.t("login.fallbackName"));
              }
            }}
          >
            <Text
              style={[styles.pillLabel, isActive && styles.pillLabelActive]}
            >
              {locale.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );

  const extractNameFromEmail = (value) => {
    if (!value) {
      return i18n.t("login.fallbackName");
    }
    const base = value.split("@")[0] || "";
    const parts = base.split(/[._-]/).filter(Boolean);
    if (!parts.length) {
      return i18n.t("login.fallbackName");
    }
    return parts
      .map(
        (segment) =>
          segment.charAt(0).toUpperCase() + segment.slice(1).toLowerCase()
      )
      .join(" ");
  };

  const handleLogin = () => {
    setProfileName(extractNameFromEmail(email));
    setStage("app");
    setActiveTab("overview");
  };

  const handleBack = () => {
    setStage("login");
  };

  if (stage === "language") {
    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar style="dark" />
        <View style={styles.languageWrapper}>
          <Text style={styles.heroTitle}>
            {i18n.t("languageSelection.title")}
          </Text>
          <Text style={styles.heroSubtitle}>
            {i18n.t("languageSelection.subtitle")}
          </Text>
          {renderLocaleButtons("center")}
          <Pressable
            style={styles.primaryButton}
            onPress={() => setStage("login")}
          >
            <Text style={styles.primaryButtonLabel}>
              {i18n.t("languageSelection.continue")}
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  if (stage === "login") {
    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar style="dark" />
        <ScrollView
          contentContainerStyle={styles.loginContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.loginCard}>
            <Text style={styles.heroTitle}>{i18n.t("login.title")}</Text>
            <Text style={styles.heroSubtitle}>{i18n.t("login.subtitle")}</Text>
            <View style={styles.formGroup}>
              <Text style={styles.fieldLabel}>
                {i18n.t("login.emailLabel")}
              </Text>
              <TextInput
                style={styles.textInput}
                placeholder="user@example.edu"
                placeholderTextColor="#999aa5"
                autoCapitalize="none"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
            </View>
            <View style={styles.formGroup}>
              <Text style={styles.fieldLabel}>
                {i18n.t("login.passwordLabel")}
              </Text>
              <TextInput
                style={styles.textInput}
                placeholder="********"
                placeholderTextColor="#999aa5"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>
            <Pressable style={styles.primaryButton} onPress={handleLogin}>
              <Text style={styles.primaryButtonLabel}>
                {i18n.t("login.action")}
              </Text>
            </Pressable>
            <Text style={styles.hintText}>{i18n.t("login.hint")}</Text>
          </View>
          <Pressable onPress={() => setStage("language")}>
            <Text style={styles.linkText}>
              {i18n.t("login.changeLanguage")}
            </Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.appStage}>
        <View style={styles.appTopBar}>
          <Pressable
            style={styles.backButton}
            onPress={handleBack}
            accessibilityRole="button"
            accessibilityLabel={i18n.t("actions.back")}
          >
            <Text style={styles.backIcon}>{"←"}</Text>
          </Pressable>
        </View>
        {activeTab === "overview" && (
          <View style={styles.appHeader}>
            <Text style={styles.appTitle}>{i18n.t("app.name")}</Text>
            <Text style={styles.appTagline}>{i18n.t("app.tagline")}</Text>
          </View>
        )}
        {activeTab === "courses" && (
          <View style={styles.appHeader}>
            <Text style={styles.appTitle}>{i18n.t("courses.title")}</Text>
            <Text style={styles.appTagline}>{i18n.t("courses.subtitle")}</Text>
          </View>
        )}
        {activeTab === "settings" && (
          <View style={styles.appHeader}>
            <Text style={styles.appTitle}>{settingsContent.title}</Text>
            <Text style={styles.appTagline}>{settingsContent.subtitle}</Text>
          </View>
        )}
        <ScrollView contentContainerStyle={styles.mainContent}>
          {activeTab === "overview" && (
            <View>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>
                  {i18n.t("overview.greeting", { name: profileName })}
                </Text>
                <Text style={styles.cardBody}>
                  {i18n.t("overview.message")}
                </Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>{overviewQuickStats.title}</Text>
                <View style={styles.statsRow}>
                  {overviewQuickStats.stats?.map((stat) => (
                    <View key={stat.id} style={styles.statItem}>
                      <Text style={styles.statValue}>{stat.value}</Text>
                      <Text style={styles.statLabel}>{stat.label}</Text>
                    </View>
                  ))}
                </View>
              </View>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>{overviewNextUp.title}</Text>
                {overviewNextUp.items && overviewNextUp.items.length > 0 ? (
                  overviewNextUp.items.map((item) => (
                    <View key={item.id} style={styles.timelineItem}>
                      <Text style={styles.timelineTitle}>{item.title}</Text>
                      <Text style={styles.timelineMeta}>{item.course}</Text>
                      <Text style={styles.timelineDue}>{item.due}</Text>
                    </View>
                  ))
                ) : (
                  <Text style={styles.mutedText}>{overviewNextUp.empty}</Text>
                )}
              </View>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>
                  {overviewNotifications.title}
                </Text>
                {overviewNotifications.items?.map((item) => (
                  <View key={item.id} style={styles.timelineItem}>
                    <Text style={styles.timelineMeta}>{item.course}</Text>
                    <Text style={styles.timelineTitle}>{item.message}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          {activeTab === "courses" && (
            <View>
              {courseEntries.map((course) => (
                <View key={course.key} style={styles.courseCard}>
                  <View style={styles.courseHeader}>
                    <Text style={styles.courseTitle}>{course.name}</Text>
                    <Text style={styles.courseCode}>{course.code}</Text>
                  </View>
                  <Text style={styles.courseInstructor}>
                    {course.instructor}
                  </Text>
                  <Text style={styles.courseSummary}>{course.summary}</Text>
                  <View style={styles.divider} />
                  <View style={styles.courseSection}>
                    <Text style={styles.sectionTitle}>
                      {i18n.t("courses.labels.activities")}
                    </Text>
                    {course.activities?.map((activity) => (
                      <Text key={activity} style={styles.listItem}>
                        - {activity}
                      </Text>
                    ))}
                  </View>
                  <View style={styles.courseSection}>
                    <Text style={styles.sectionTitle}>
                      {i18n.t("courses.labels.quizzes")}
                    </Text>
                    {course.quizzes?.map((quiz) => (
                      <Text key={quiz} style={styles.listItem}>
                        - {quiz}
                      </Text>
                    ))}
                  </View>
                  <View style={styles.courseSection}>
                    <Text style={styles.sectionTitle}>
                      {i18n.t("courses.labels.notifications")}
                    </Text>
                    {course.notifications?.map((note) => (
                      <Text key={note} style={styles.listItem}>
                        - {note}
                      </Text>
                    ))}
                  </View>
                </View>
              ))}
            </View>
          )}

          {activeTab === "settings" && (
            <View>
              <View style={styles.card}>
                <Text style={styles.sectionTitle}>
                  {settingsContent.language.title}
                </Text>
                <Text style={styles.cardBody}>
                  {settingsContent.language.description}
                </Text>
                {renderLocaleButtons("start")}
              </View>
              <View style={styles.card}>
                <Text style={styles.sectionTitle}>
                  {settingsContent.notifications.title}
                </Text>
                <Text style={styles.cardBody}>
                  {settingsContent.notifications.summary}
                </Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.sectionTitle}>
                  {settingsContent.help.title}
                </Text>
                {settingsContent.help.items?.map((item) => (
                  <Text key={item} style={styles.listItem}>
                    - {item}
                  </Text>
                ))}
              </View>
              <Pressable
                style={[styles.primaryButton, styles.logoutButton]}
                onPress={() => {
                  setEmail("");
                  setPassword("");
                  setProfileName(i18n.t("login.fallbackName"));
                  setActiveTab("overview");
                  setStage("login");
                }}
              >
                <Text style={styles.primaryButtonLabel}>
                  {settingsContent.logout}
                </Text>
              </Pressable>
            </View>
          )}
        </ScrollView>
      </View>
      <View style={styles.bottomTabBar}>
        {appTabs.map((tab) => {
          const isActive = activeTab === tab;
          const label = i18n.t(`navigation.${tab}`);
          const accessibilityLabel = i18n.t(`navigation.${tab}`);
          return (
            <Pressable
              key={tab}
              style={[
                styles.bottomTabButton,
                isActive && styles.bottomTabButtonActive,
              ]}
              onPress={() => setActiveTab(tab)}
              accessibilityRole="tab"
              accessibilityState={{ selected: isActive }}
              accessibilityLabel={accessibilityLabel}
            >
              <Text
                style={[
                  styles.bottomTabLabel,
                  isActive && styles.bottomTabLabelActive,
                ]}
              >
                {label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f4f5fb",
  },
  languageWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  heroTitle: {
    fontSize: 26,
    fontWeight: "700",
    color: "#1e1f24",
    textAlign: "center",
  },
  heroSubtitle: {
    marginTop: 12,
    fontSize: 16,
    color: "#5c5d66",
    textAlign: "center",
    lineHeight: 22,
  },
  pillRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 28,
    marginBottom: 24,
  },
  pillRowCenter: {
    justifyContent: "center",
  },
  pillRowStart: {
    justifyContent: "flex-start",
  },
  pillButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 999,
    backgroundColor: "#e2e4ef",
    marginHorizontal: 6,
    marginVertical: 6,
  },
  pillButtonActive: {
    backgroundColor: "#3056ff",
  },
  pillLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#272833",
  },
  pillLabelActive: {
    color: "#ffffff",
  },
  primaryButton: {
    marginTop: 8,
    backgroundColor: "#3056ff",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 16,
    alignItems: "center",
  },
  primaryButtonLabel: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ffffff",
  },
  loginContainer: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  loginCard: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 24,
    shadowColor: "#000000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
    marginBottom: 24,
  },
  formGroup: {
    marginTop: 20,
  },
  fieldLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2c2d35",
    marginBottom: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#d4d6dd",
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 15,
    color: "#1e1f24",
    backgroundColor: "#f9f9fb",
  },
  hintText: {
    marginTop: 16,
    fontSize: 13,
    color: "#61626c",
    textAlign: "center",
  },
  linkText: {
    fontSize: 14,
    color: "#3056ff",
    fontWeight: "600",
    textAlign: "center",
  },
  appStage: {
    flex: 1,
  },
  appTopBar: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 8,
  },
  backButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 999,
    backgroundColor: "#e7e9f4",
  },
  backIcon: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1f2026",
  },
  appHeader: {
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 12,
  },
  appTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1e1f24",
  },
  appTagline: {
    marginTop: 6,
    fontSize: 15,
    color: "#5c5d66",
  },
  mainContent: {
    paddingHorizontal: 24,
    paddingBottom: 120,
    paddingTop: 8,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
    marginBottom: 18,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1f2026",
    marginBottom: 10,
  },
  cardBody: {
    fontSize: 15,
    color: "#535562",
    lineHeight: 22,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  statItem: {
    flex: 1,
    padding: 12,
    borderRadius: 16,
    backgroundColor: "#f2f3fc",
    marginHorizontal: 4,
    alignItems: "center",
  },
  statValue: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1f2026",
  },
  statLabel: {
    marginTop: 4,
    fontSize: 13,
    color: "#61626c",
    textAlign: "center",
  },
  timelineItem: {
    marginTop: 14,
  },
  timelineTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1f2026",
  },
  timelineMeta: {
    marginTop: 2,
    fontSize: 14,
    color: "#5c5d66",
  },
  timelineDue: {
    marginTop: 2,
    fontSize: 13,
    color: "#3056ff",
  },
  mutedText: {
    fontSize: 14,
    color: "#8a8c98",
  },
  courseCard: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
    marginBottom: 20,
  },
  courseHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1f2026",
  },
  courseCode: {
    fontSize: 14,
    fontWeight: "600",
    color: "#3056ff",
  },
  courseInstructor: {
    marginTop: 6,
    fontSize: 14,
    color: "#5c5d66",
  },
  courseSummary: {
    marginTop: 8,
    fontSize: 14,
    color: "#61626c",
    lineHeight: 21,
  },
  divider: {
    height: 1,
    backgroundColor: "#eceef6",
    marginVertical: 16,
  },
  courseSection: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1f2026",
    marginBottom: 8,
  },
  listItem: {
    fontSize: 14,
    color: "#535562",
    lineHeight: 20,
  },
  logoutButton: {
    marginHorizontal: 24,
    marginTop: 12,
    marginBottom: 40,
    backgroundColor: "#1e1f24",
  },
  bottomTabBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#d4d6dd",
    backgroundColor: "#ffffff",
  },
  bottomTabButton: {
    flex: 1,
    marginHorizontal: 6,
    paddingVertical: 10,
    borderRadius: 14,
    backgroundColor: "#e7e9f4",
    alignItems: "center",
  },
  bottomTabButtonActive: {
    backgroundColor: "#3056ff",
  },
  bottomTabLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#283048",
  },
  bottomTabLabelActive: {
    color: "#ffffff",
  },
});
