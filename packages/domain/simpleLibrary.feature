Feature: Browsing items
  Background: User has a library card
  Scenario: User browses titles
    Given the library has a title of {Title}
    When the user requests all titles
    Then the results should include {Title}

  Scenario: User browses available titles
    Given the library has a title of {Title}
    And all items with title {Title} are loaned out
    When the user requests available titles
    Then the results should not contain {Title}

